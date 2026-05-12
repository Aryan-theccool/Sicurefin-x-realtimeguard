"use client"

import { Navbar } from "@/components/navbar"
import { useAuth } from "@/components/auth-context"
import { Button } from "@/components/ui/button"
import { Shield, TrendingUp, AlertCircle, Wallet, Radar as RadarIcon, Plus, Trash2 } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"
import { AddExpenseModal } from "@/components/add-expense-modal"
import { TamperModal } from "@/components/realtime-guard/tamper-modal"
import { Bar, BarChart, CartesianGrid, XAxis, Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts"
import {
    ChartConfig,
    Chart,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"


const chartConfig = {
    Expenditure: {
        label: "Expenditure",
        color: "#005A30",
    },
} satisfies ChartConfig

const categoryConfig = {
    amount: { label: "Amount", color: "#03224C" },
} satisfies ChartConfig

export default function DashboardPage() {
    const { role } = useAuth()
    const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false)
    const [expenses, setExpenses] = useState([
        { id: "1", name: "Rent", amount: "5200", due: "1st of month", paid: false, category: "Rent", date: "2024-05-01", important: true },
        { id: "2", name: "EMI - Laptop", amount: "3500", due: "5th of month", paid: true, category: "Shopping", date: "2024-05-05", important: true },
        { id: "3", name: "Utilities", amount: "750", due: "10th of month", paid: false, category: "Utilities", date: "2024-05-10", important: false },
        { id: "4", name: "Internet", amount: "570", due: "15th of month", paid: true, category: "Utilities", date: "2024-05-15", important: true },
    ])
    const [selectedMonth, setSelectedMonth] = useState<string>(new Date().toLocaleString('default', { month: 'long', year: 'numeric' }))
    const [liveTransactions, setLiveTransactions] = React.useState<any[]>([])
    const [stats, setStats] = React.useState({
        threats: 0,
        blocks: 412,
        analyzed: 15204
    })
    const [tamperData, setTamperData] = useState<any>(null)
    const [isTamperModalOpen, setIsTamperModalOpen] = useState(false)

    // WebSocket for Admin Live Stats
    React.useEffect(() => {
        if (role !== 'admin') return;

        const wsUrl = process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:4000';
        const ws = new WebSocket(wsUrl);
        ws.onmessage = (event) => {
            try {
                const message = JSON.parse(event.data);
                if (message.type === 'TX') {
                    const tx = message.data;
                    setLiveTransactions(prev => [tx, ...prev].slice(0, 10));
                    setStats(prev => ({
                        ...prev,
                        analyzed: prev.analyzed + 1,
                        threats: tx.fraud_score > 80 ? prev.threats + 1 : prev.threats
                    }));
                } else if (message.type === 'HISTORY') {
                    const history = message.data;
                    setLiveTransactions(history.slice(0, 10));
                    setStats(prev => ({
                        ...prev,
                        analyzed: prev.analyzed + history.length,
                        threats: prev.threats + history.filter((t: any) => t.fraud_score > 80).length
                    }));
                } else if (message.type === 'BLOCKCHAIN_TAMPERED') {
                    console.warn('Tampering detected via WebSocket!');
                    setTamperData(message.data);
                    setIsTamperModalOpen(true);
                } else if (message.type === 'BLOCKCHAIN_RECOVERY') {
                    setIsTamperModalOpen(false);
                    setTamperData(null);
                }
            } catch (e) {
                console.error('WS Error:', e);
            }
        };
        return () => ws.close();
    }, [role]);

    const handleSimulateAttack = async () => {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
            await fetch(`${baseUrl}/api/blockchain/simulate-attack`, { method: 'POST' });
            alert('Attack simulation triggered');
        } catch (e) {
            console.error('Failed to trigger simulation', e);
        }
    };

    const handleRestoreChain = async () => {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
            await fetch(`${baseUrl}/api/blockchain/restore`, { method: 'POST' });
            alert('Chain restored successfully');
            setTamperData(null);
        } catch (e) {
            console.error('Failed to restore chain', e);
        }
    };

    const handleAddExpense = (newExpense: any) => {
        setExpenses(prev => [{
            ...newExpense,
            due: "Today",
            paid: false
        }, ...prev])
    }

    const handleDeleteExpense = (id: string) => {
        setExpenses(prev => prev.filter(expense => expense.id !== id))
    }

    // Group expenses by month
    const expensesByMonth = React.useMemo(() => {
        const grouped: { [key: string]: { title: string, expenses: typeof expenses, sortKey: number } } = {}

        expenses.forEach(expense => {
            const date = expense.date ? new Date(expense.date) : new Date()
            const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' })

            if (!grouped[monthYear]) {
                grouped[monthYear] = {
                    title: monthYear,
                    expenses: [],
                    sortKey: date.getTime() // Use timestamp for sorting
                }
            }
            grouped[monthYear].expenses.push(expense)
        })

        return Object.values(grouped).sort((a, b) => a.sortKey - b.sortKey)
    }, [expenses])

    // Derive Chart Data
    const chartData = React.useMemo(() => {
        return expensesByMonth.map(group => ({
            month: group.title,
            Expenditure: group.expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0)
        }))
    }, [expensesByMonth])

    // Derive Category Data
    const categoryData = React.useMemo(() => {
        const catData: { [key: string]: number } = {}

        expenses.forEach(expense => {
            const cat = expense.category || "Others"
            if (!catData[cat]) catData[cat] = 0
            catData[cat] += parseFloat(expense.amount)
        })

        return Object.keys(catData).map(category => ({
            category,
            amount: catData[category]
        }))
    }, [expenses])

    // Calculate Budget Metrics
    const budgetMonth = selectedMonth
    const currentMonthExpenses = expensesByMonth.find(g => g.title === budgetMonth)?.expenses || []
    const totalSpent = currentMonthExpenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0)

    const MONTHLY_LIMIT = 10000
    const SAVINGS_GOAL = 1000
    const remaining = Math.max(0, MONTHLY_LIMIT - totalSpent)
    const saved = remaining // Assuming remaining budget is saved
    const spentPercentage = Math.min(100, (totalSpent / MONTHLY_LIMIT) * 100)
    const savedPercentage = Math.min(100, (saved / SAVINGS_GOAL) * 100)

    if (role === "admin") {
        return (
            <div className="min-h-screen bg-background text-foreground flex flex-col">
                <Navbar />
                <main className="flex-1 container px-4 md:px-6 py-12 pt-24">
                    <div className="max-w-6xl mx-auto space-y-8">
                        {/* Header Section */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-border/50">
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                                    Security Command Center
                                </h1>
                                <p className="text-muted-foreground mt-2">Global infrastructure and fraud detection monitoring active.</p>
                            </div>
                            <Link href="/realtime-guard">
                                <Button className="bg-green-500 hover:bg-green-400 text-black font-bold h-12 px-8 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all hover:scale-105 gap-2">
                                    <Shield className="h-5 w-5" />
                                    Launch RealtimeGuard Forensics
                                </Button>
                            </Link>
                        </div>

                        {/* Simulation Control (Admin Only) */}
                        <div className="flex gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-2xl">
                            <Button
                                onClick={handleSimulateAttack}
                                className="bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 font-bold gap-2"
                            >
                                <AlertCircle className="h-4 w-4" />
                                Simulate Security Breach
                            </Button>
                            {tamperData && (
                                <Button
                                    onClick={handleRestoreChain}
                                    className="bg-green-500/10 hover:bg-green-500/20 text-green-500 border border-green-500/30 font-bold gap-2"
                                >
                                    <Shield className="h-4 w-4" />
                                    Restore Integrity
                                </Button>
                            )}
                        </div>

                        {/* Top Stats Grid */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                { label: "Nodes Active", value: "14 / 14", trend: "STABLE", color: "text-green-500" },
                                { label: "Traffic Purge", value: "99.98%", trend: "+0.02%", color: "text-cyan-500" },
                                { label: "Suspicious Events", value: stats.threats.toString(), trend: "REAL-TIME", color: "text-orange-500" },
                                { label: "Blockchain Integrity", value: "VERIFIED", trend: `LATEST: #${stats.analyzed}`, color: "text-green-500" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-slate-950/40 border border-border/50 p-6 rounded-2xl shadow-sm backdrop-blur-sm group hover:border-green-500/30 transition-colors">
                                    <h3 className="text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">{stat.label}</h3>
                                    <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                                    <div className="text-xs text-slate-500 mt-2 flex items-center gap-1 font-mono">
                                        {stat.trend}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid gap-6 lg:grid-cols-3">
                            {/* System Health Section */}
                            <div className="lg:col-span-2 bg-slate-950/40 border border-border/50 rounded-2xl p-8 shadow-sm">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <TrendingUp className="h-5 w-5 text-green-500" />
                                        Threat Intelligence Feed
                                    </h3>
                                    <div className="flex gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs text-green-500 font-mono">LIVE_STREAM</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {liveTransactions.length === 0 ? (
                                        <p className="text-sm text-slate-500 text-center py-4">Waiting for incoming telemetry...</p>
                                    ) : (
                                        liveTransactions.map((tx, i) => (
                                            <div key={tx.id || i} className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border/30 group hover:bg-slate-900/50 transition-all">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-xs font-mono text-slate-500 w-16">{new Date(tx.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                                    <p className="text-sm font-medium text-slate-200">
                                                        {tx.fraud_score > 80 ? `High Risk: ${tx.merchant} detected` : `Standard: ${tx.merchant} verified`}
                                                    </p>
                                                </div>
                                                <span className={`text-[10px] px-2 py-0.5 rounded font-bold border ${tx.fraud_score > 80 ? 'bg-red-500/10 border-red-500/50 text-red-500' :
                                                    tx.fraud_score > 40 ? 'bg-orange-500/10 border-orange-500/50 text-orange-500' :
                                                        'bg-green-500/10 border-green-500/50 text-green-500'
                                                    }`}>
                                                    {tx.fraud_score > 80 ? 'ALERT' : tx.fraud_score > 40 ? 'WARNING' : 'SECURE'}
                                                </span>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>

                            {/* Guard Status Summary */}
                            <div className="bg-slate-950/40 border border-border/50 rounded-2xl p-8 shadow-sm">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-cyan-500" />
                                    Security Status
                                </h3>
                                <div className="space-y-8">
                                    <div className="text-center p-6 bg-green-500/5 rounded-2xl border border-green-500/20">
                                        <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
                                        <h4 className="font-bold text-green-500 text-lg uppercase tracking-widest">Protocol Stable</h4>
                                        <p className="text-sm text-slate-400 mt-2">Advanced forensics engine is currently filtering live transaction streams.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-400">Total Analyzed</span>
                                            <span className="text-white font-mono">{stats.analyzed.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-400">Threats Prevented</span>
                                            <span className="text-red-400 font-mono">{stats.threats}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-400">Blockchain Sync</span>
                                            <span className="text-cyan-400 font-mono">100% (LIVE)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <main className="flex-1 container px-4 md:px-6 py-8 pt-24 space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Financial Overview</h1>
                        <p className="text-muted-foreground mt-1">Track your expenses and manage your budget effectively.</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-xl shadow-sm">
                            <Shield className="h-5 w-5 text-green-500" />
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-bold text-green-500/70 leading-none">RealtimeGuard</span>
                                <span className="text-sm font-bold text-green-500">PROTECTION ACTIVE</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-xl shadow-sm">
                            <Wallet className="h-5 w-5 text-cyan-500" />
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-bold text-slate-500 leading-none">Total Balance</span>
                                <span className="text-sm font-bold">₹12,450.00</span>
                            </div>
                        </div>
                        <Button onClick={() => setIsAddExpenseOpen(true)} className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold h-11 px-6 rounded-xl gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105">
                            <Plus className="h-4 w-4" />
                            Add Expense
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                    {/* Expense Trend Chart */}
                    <div className="col-span-4 bg-card border border-border rounded-2xl p-11 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="font-semibold text-lg flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5 text-cyan-500" />
                                    Monthly Expense Trend
                                </h3>
                                <p className="text-sm">Tracking monthly expenditure</p>
                            </div>
                        </div>
                        <Chart config={chartConfig} className="h-[300px] w-full">
                            <BarChart accessibilityLayer data={chartData}>
                                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                    stroke="hsl(var(--muted-foreground))"
                                />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <ChartLegend content={<ChartLegendContent />} />
                                <Bar
                                    dataKey="Expenditure"
                                    fill="var(--color-Expenditure)"
                                    radius={4}
                                    maxBarSize={50}
                                    onClick={(data) => setSelectedMonth(data.month)}
                                    className="cursor-pointer hover:opacity-80 transition-opacity"
                                />
                            </BarChart>
                        </Chart>
                    </div>

                    {/* Expense Categorization Chart (Radar) */}
                    <div className="col-span-4 lg:col-span-3 bg-card border border-border rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="font-semibold text-lg flex items-center gap-2">
                                    <RadarIcon className="h-5 w-5 text-cyan-500" />
                                    Expense Breakdown
                                </h3>
                                <p className="text-sm text-muted-foreground">Distribution by category</p>
                            </div>
                        </div>
                        <Chart config={categoryConfig} className="h-[300px] w-full mx-auto aspect-square max-h-[300px]">
                            <RadarChart data={categoryData}>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent />}
                                />
                                <PolarGrid className="fill-[--color-desktop] opacity-20" />
                                <PolarAngleAxis dataKey="category" />
                                <Radar
                                    dataKey="amount"
                                    fill="var(--color-amount)"
                                    fillOpacity={0.5}
                                    stroke="var(--color-amount)"
                                    strokeWidth={2}
                                />
                            </RadarChart>
                        </Chart>
                    </div>

                    {/* Side Widgets */}
                    <div className="col-span-4 lg:col-span-7 grid md:grid-cols-2 gap-6">
                        {/* Important Expenses */}
                        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                <AlertCircle className="h-5 w-5 text-orange-500" />
                                Important Expenses
                            </h3>
                            <div className="space-y-4">
                                {expenses.filter(e => e.important).map((expense, i) => (
                                    <div key={expense.id || i} className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border/50 hover:border-border transition-colors group">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full ${expense.paid ? "bg-green-500" : "bg-orange-500"}`} />
                                            <div>
                                                <p className="font-medium text-sm">{expense.name}</p>
                                                <p className="text-xs text-muted-foreground">Due: {expense.due}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="font-bold text-sm">₹{expense.amount}</span>
                                            <button
                                                onClick={() => handleDeleteExpense(expense.id)}
                                                className="text-slate-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                                                title="Remove Expense"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Budget Constraints */}
                        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                            <h3 className="font-semibold text-lg mb-4">Budget Constraints <span className="text-sm font-normal text-muted-foreground ml-2">({budgetMonth})</span></h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-muted-foreground">Monthly Limit</span>
                                        <span className="font-medium">₹{MONTHLY_LIMIT.toLocaleString()}</span>
                                    </div>
                                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${spentPercentage > 90 ? 'bg-red-500' : 'bg-cyan-500'}`}
                                            style={{ width: `${spentPercentage}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between text-xs mt-2 text-muted-foreground">
                                        <span>Spent: ₹{totalSpent.toLocaleString()}</span>
                                        <span>Remaining: ₹{remaining.toLocaleString()}</span>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-muted-foreground">Savings Goal</span>
                                        <span className="font-medium">₹{SAVINGS_GOAL.toLocaleString()}</span>
                                    </div>
                                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-green-500"
                                            style={{ width: `${savedPercentage}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between text-xs mt-2 text-muted-foreground">
                                        <span>Saved: ₹{saved.toLocaleString()}</span>
                                        <span>Target: ₹{SAVINGS_GOAL.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Monthly Expenses List */}
                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <Wallet className="h-5 w-5 text-cyan-500" />
                        Monthly Expenses
                    </h3>
                    <div className="space-y-6">
                        {expensesByMonth.length === 0 ? (
                            <p className="text-sm text-muted-foreground text-center py-4">No expenses recorded yet.</p>
                        ) : (
                            expensesByMonth.map((group) => (
                                <div key={group.title} className="space-y-3">
                                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider pl-1">{group.title}</h4>
                                    <div className="space-y-3">
                                        {group.expenses.map((expense, i) => (
                                            <div key={expense.id || i} className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border/50 hover:border-border transition-colors group">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-2 h-2 rounded-full ${expense.paid ? "bg-green-500" : "bg-orange-500"}`} />
                                                    <div>
                                                        <p className="font-medium text-sm">{expense.name}</p>
                                                        <div className="flex gap-2 text-xs text-muted-foreground">
                                                            <span>{expense.category}</span>
                                                            <span>•</span>
                                                            <span>{expense.date || "No Date"}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="font-bold text-sm">₹{expense.amount}</span>
                                                    <button
                                                        onClick={() => handleDeleteExpense(expense.id)}
                                                        className="text-slate-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                                                        title="Remove Expense"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </main>
            <AddExpenseModal
                isOpen={isAddExpenseOpen}
                onClose={() => setIsAddExpenseOpen(false)}
                onAddExpense={handleAddExpense}
            />
            <TamperModal
                isOpen={isTamperModalOpen}
                onClose={() => setIsTamperModalOpen(false)}
                data={tamperData}
            />
        </div>
    )
}
