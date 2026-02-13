import React, { useState } from 'react';
import { Lock, User, Search, ShieldCheck } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Member {
    id: string;
    name: string;
    email: string;
    onboardingProgress: number;
    joinedDate: string;
    status: 'Active' | 'Pending' | 'Suspended';
}

const MOCK_MEMBERS: Member[] = [
    { id: '1', name: 'Johnathan Wickham', email: 'j.wickham@continental.tax', onboardingProgress: 65, joinedDate: 'Jan 14, 2024', status: 'Active' },
    { id: '2', name: 'Cassandra Vane', email: 'c.vane@vane-associated.com', onboardingProgress: 100, joinedDate: 'Dec 02, 2023', status: 'Active' },
    { id: '3', name: 'Marcus Aurelius', email: 'marcus@stoic-services.net', onboardingProgress: 20, joinedDate: 'Feb 10, 2024', status: 'Pending' },
    { id: '4', name: 'Elena Fisher', email: 'elena@fisher-bureau.org', onboardingProgress: 85, joinedDate: 'Nov 20, 2023', status: 'Active' },
    { id: '5', name: 'Victor Sullivan', email: 'sully@uncharted-taxes.biz', onboardingProgress: 100, joinedDate: 'Oct 15, 2023', status: 'Suspended' },
    { id: '6', name: 'Lara Croft', email: 'lara@croft-holdings.uk', onboardingProgress: 45, joinedDate: 'Jan 30, 2024', status: 'Active' },
];

const Admin: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [authError, setAuthError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setAuthError('');

        try {
            if (!supabase) {
                throw new Error('Supabase client is not initialized. Check your environment variables.');
            }

            const { data: { user }, error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (signInError) throw signInError;

            if (user) {
                // Check if user has admin role
                const { data: profile, error: profileError } = await supabase
                    .from('profiles')
                    .select('role')
                    .eq('id', user.id)
                    .single();

                if (profileError) {
                    // Fallback: This handles cases where the profile might not exist 
                    // or RLS prevents reading it (though admins should be able to read).
                    console.error('Error fetching profile:', profileError);
                    throw new Error('Profile access restricted.');
                }

                if (profile?.role === 'admin') {
                    setIsAuthenticated(true);
                } else {
                    await supabase.auth.signOut();
                    throw new Error('Access Denied: Administrator privileges required.');
                }
            }
        } catch (err: any) {
            console.error(err);
            setAuthError(err.message || 'Authentication failed');
            setIsAuthenticated(false);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        if (supabase) {
            await supabase.auth.signOut();
        }
        setIsAuthenticated(false);
    };

    const filteredMembers = MOCK_MEMBERS.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
                    <div className="text-center mb-8">
                        <img src="/sssb-logo.png" alt="SSSB Logo" className="h-24 w-auto mx-auto mb-6" />
                        <h1 className="text-2xl font-serif font-bold text-primary uppercase tracking-widest">Restricted Access</h1>
                        <p className="text-gray-500 text-sm mt-2">High Table clearance required.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-surface border border-gray-200 rounded-lg px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all font-mono"
                                placeholder="admin@example.com"
                                autoFocus
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Passcode</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-surface border border-gray-200 rounded-lg px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all font-mono"
                                placeholder="••••••••••••"
                                required
                            />
                        </div>

                        {authError && (
                            <div className="text-red-500 text-xs font-bold text-center bg-red-50 py-2 rounded">
                                ⚠ {authError}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Verifying Credentials...' : 'Authenticate'}
                        </button>

                        <div className="text-center pt-4">
                            <a href="/" className="text-gray-400 text-xs hover:text-primary transition-colors">Return to Society</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Admin Navbar */}
            <nav className="bg-primary text-white px-8 py-4 flex items-center justify-between shadow-lg sticky top-0 z-50">
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <ShieldCheck size={20} className="text-accent" />
                    </div>
                    <div>
                        <h1 className="font-serif font-bold text-lg tracking-wide">High Table Console</h1>
                        <p className="text-[10px] text-accent uppercase tracking-[0.2em]">Administrator View</p>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <a href="/" className="text-white/70 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">View Site</a>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-200 rounded border border-red-500/20 text-xs font-bold uppercase tracking-widest transition-all"
                    >
                        Logout
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                    <div>
                        <h2 className="text-3xl font-serif text-primary font-bold mb-2">Member Registry</h2>
                        <p className="text-gray-500">Managing {MOCK_MEMBERS.length} active service bureaus.</p>
                    </div>
                    <div className="relative w-full md:w-96">
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm"
                        />
                        <Search className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-surface border-b border-gray-100">
                                    <th className="px-6 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Bureau Member</th>
                                    <th className="px-6 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Contact</th>
                                    <th className="px-6 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Onboarding</th>
                                    <th className="px-6 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Joined</th>
                                    <th className="px-6 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {filteredMembers.map((member) => (
                                    <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                                                    <User size={14} />
                                                </div>
                                                <span className="font-serif font-bold text-primary">{member.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-gray-500 font-mono">{member.email}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full ${member.onboardingProgress === 100 ? 'bg-accent' : 'bg-primary/60'}`}
                                                        style={{ width: `${member.onboardingProgress}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-xs font-bold text-gray-600">{member.onboardingProgress}%</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-gray-500">{member.joinedDate}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${member.status === 'Active' ? 'bg-green-50 text-green-700' :
                                                member.status === 'Pending' ? 'bg-amber-50 text-amber-700' :
                                                    'bg-red-50 text-red-700'
                                                }`}>
                                                {member.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {filteredMembers.length === 0 && (
                        <div className="text-center py-12 text-gray-400">
                            No members found matching your search.
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Admin;
