import React from 'react';
import { Link } from 'react-router-dom';

const ServiceIntro: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <div className="relative w-full bg-background-light dark:bg-background-dark z-50">
                <div className="layout-container flex w-full justify-center">
                    <div className="flex flex-col w-full max-w-[1280px]">
                        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7ebf3] dark:border-b-gray-800 px-4 md:px-10 py-4">
                            <Link className="text-text-main dark:text-white text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity" to="/">LYNKS</Link>
                            <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                                <nav className="flex items-center gap-9">
                                    <Link className="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" to="/">サービス概要</Link>
                                    <Link className="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" to="/solutions">機能・特長</Link>
                                    <a className="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">活用事例</a>
                                    <a className="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">よくある質問</a>
                                </nav>
                                <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-blue-700 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                    <span className="truncate">お問い合わせ</span>
                                </button>
                            </div>
                            <div className="md:hidden text-text-main dark:text-white">
                                <span className="material-symbols-outlined">menu</span>
                            </div>
                        </header>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <div className="relative w-full bg-background-light dark:bg-background-dark">
                <div className="layout-container flex justify-center">
                    <div className="flex flex-col w-full max-w-[1280px]">
                        <div className="@container">
                            <div className="p-4 md:p-10">
                                <div className="flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-12 md:px-12 md:pb-16 shadow-lg" 
                                     style={{backgroundImage: 'linear-gradient(rgba(16, 22, 34, 0.2) 0%, rgba(16, 22, 34, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOa4sa1a-qItj9PbYkl36uSsLsnVE_QkgfqyhkPz8MDX4LmZvTwqsphCkQBnNM9azS75kGljz2fRqKbfNpvdUCTZFFaRFgTkQJZsylQg8j_sgHjfkyx5HX1FRl9lT4KdH7_QCkO3vdYxozfoyG3iV31_8U0HkPTXqSPs132TTD1W8o5dHTL3D1P4LOEimV2DxHgql6LRcfIxbusAMntnWzGA6ZM4-w9OKus2vxKXwUJooOB8YJJUs6azLKbTVNjirdwYTKoOTitzQ")'}}>
                                    <div className="flex flex-col gap-4 text-left max-w-4xl">
                                        <h1 className="text-white text-3xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl">
                                            デジタルコンテンツの未来を、もっと自由に。
                                        </h1>
                                        <h2 className="text-gray-200 text-lg font-normal leading-relaxed md:text-xl max-w-2xl">
                                            コンテンツ管理・流通を最適化する次世代プラットフォーム LYNKS
                                        </h2>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
                                        <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-blue-700 text-white text-base font-bold transition-colors shadow-md">
                                            <span>お問い合わせ</span>
                                        </button>
                                        <Link to="/solutions" className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 text-base font-bold transition-colors">
                                            <span>詳しく見る</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overview */}
            <div className="relative w-full bg-background-light dark:bg-background-dark pt-10">
                <div className="layout-container flex justify-center">
                    <div className="flex flex-col w-full max-w-[960px] px-4 md:px-10 text-center">
                        <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2">サービス概要</span>
                        <h2 className="text-text-main dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.015em]">
                            包括的なコンテンツエコシステム
                        </h2>
                        <p className="text-text-secondary dark:text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
                            インジェストから配信まで、LYNKSは現代のメディア環境に向けて設計された包括的なツールスイートを提供します。
                        </p>
                    </div>
                </div>
            </div>

            {/* Features List */}
            <div className="relative w-full bg-background-light dark:bg-background-dark py-16">
                <div className="layout-container flex justify-center">
                    <div className="flex flex-col w-full max-w-[1120px] px-4 md:px-10 gap-20 md:gap-32">
                        {/* Feature 1 */}
                        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                            <div className="w-full md:w-1/2">
                                <div className="aspect-[4/3] w-full bg-cover bg-center rounded-2xl shadow-xl" 
                                     style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6W3diN6LB8NJX98KM3z5XFqWvc-iUcPqF5GMOVzyN7iag9YfMpKerQfLoZNx0pbiRa7gdrbJiNV8UdmqHhh7rVWfh1zjsLI7Oh-OONUfXq6yCOq8_O8m03TIpXTns6AlIrbP3E0W23Mj_cjK08n0Ti4816d_9PyqkX7sD6Fk7Q23J0W-BYn3zJPJcR42NcDpOeuTPnjI9YLCe2oVZImP3NiaxjKBF80_3h0ghPHUJkVSdw1g3AUVmJ21qeRSyg7dzMru0fRg2YVk")'}}>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                        <span className="material-symbols-outlined">lock</span>
                                    </div>
                                    <h3 className="text-text-main dark:text-white text-2xl font-bold">安全な権利管理</h3>
                                </div>
                                <p className="text-text-secondary dark:text-gray-300 text-lg leading-relaxed">
                                    複雑なデジタル権利の状況を自動追跡システムでナビゲート。管理の手間を省き、すべての地域とプラットフォームでコンプライアンスを確保し、収益化の機会を最大化します。
                                </p>
                                <ul className="flex flex-col gap-3 mt-2">
                                    <li className="flex items-center gap-3 text-text-main dark:text-gray-200">
                                        <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                        <span>自動コンプライアンスチェック</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-text-main dark:text-gray-200">
                                        <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                        <span>リアルタイムの地域制限</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
                            <div className="w-full md:w-1/2">
                                <div className="aspect-[4/3] w-full bg-cover bg-center rounded-2xl shadow-xl" 
                                     style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuApiE5g0OzUn5w2qwlWZitHOz7gtFsJpx-p8bMOWO0aVbPz6LnTtKRGxovIWw89I8IxWaYCP7-NOLUR4J1w2FCWWY4ZYoxD-sY0es5dZREeFDkaNSjqL_9luP45A1gsTK2JUwbk-KS8iF1FKb-TEUCXrr8q9Hlo3h9jb58Gp__HAHtZn6YIYWvsmtsjTx5fS4MLAxuRsuV4q2c4r1Vo5yUHDjR5_J9X2Qtyb1G-p1PDDKJbXxzZkcbWJrXiO5wApnCXTa7Jejk6ljc")'}}>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                        <span className="material-symbols-outlined">rocket_launch</span>
                                    </div>
                                    <h3 className="text-text-main dark:text-white text-2xl font-bold">高速グローバル配信</h3>
                                </div>
                                <p className="text-text-secondary dark:text-gray-300 text-lg leading-relaxed">
                                    独自のCDNアーキテクチャにより、世界中の視聴者に最小限の遅延でコンテンツを届けます。4K動画ストリーミングでも大容量ファイル転送でも、LYNKSはスピードと信頼性を提供します。
                                </p>
                                <ul className="flex flex-col gap-3 mt-2">
                                    <li className="flex items-center gap-3 text-text-main dark:text-gray-200">
                                        <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                        <span>99.99%の稼働率SLA</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-text-main dark:text-gray-200">
                                        <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                        <span>アダプティブビットレートストリーミング</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Functions */}
            <div className="relative w-full bg-gray-50 dark:bg-[#151c2b] py-20">
                <div className="layout-container flex justify-center">
                    <div className="flex flex-col w-full max-w-[1280px] px-4 md:px-10">
                        <div className="flex flex-col gap-4 mb-12">
                            <h2 className="text-text-main dark:text-white text-3xl font-bold leading-tight max-w-[720px]">
                                主な機能
                            </h2>
                            <p className="text-text-secondary dark:text-gray-400 text-base font-normal max-w-[720px]">
                                メディアビジネスの拡大に合わせてスケールする最先端ツール。
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Link to="/solutions" className="flex flex-col gap-4 group cursor-pointer">
                                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-sm transition-transform duration-300 group-hover:-translate-y-1" 
                                     style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASi56Ca4dIijd7seRJBYfHVl8cXkdV2GFDOfYyj29FbKtBWXPdXcinApdBqgn5wgast-KRHT_E3UHE7_WnOyaAZOumtZQNkUQ6lqtrn4ECW3SHrbaM01WVUMDxS3x1uxntpBUYdtil4SHxP12v4Yw_0vhnMR_Ptaopku3Hsa1eH1-XhrNooK11HyCjdz_lVLbwgZ2EJW3dQw9YFXlrzspUn7bBFOLmSw-AUXHCyQb1KgtsV2A13v6oxCrYlEf0tArjV3UqsPIuk5Q")'}}></div>
                                <div>
                                    <p className="text-text-main dark:text-white text-xl font-bold leading-normal mb-2">インフラストラクチャ</p>
                                    <p className="text-text-secondary dark:text-gray-400 text-sm leading-relaxed">ペタバイト規模のデータを安全に処理するエンタープライズグレードのハードウェア上に構築されています。</p>
                                </div>
                            </Link>
                            <Link to="/solutions" className="flex flex-col gap-4 group cursor-pointer">
                                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-sm transition-transform duration-300 group-hover:-translate-y-1" 
                                     style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWqVrP41DMHWm7X1_-sAhYow2f7_cZr_vr9NPpJWjy8f_1EUoasDbMGgHAL7eBWGuLx5T4BGAk911Wb_nhmu7O1kYFt9mk_zoW3iKnzQZbhP_68rj94Pbp0l7ubfVYPRAb3QywHJtincK4TOzbMASk59Dg4Y7r_8j0SHs1rzA-oG-Askc3YxioC72Cm6HBJO-PK-5mmnvIwhJx6JU_JBMBenaLKg94Mwoqtj7S14lfFMxDEg-TDn0pv3fB4dhZaXzGtZb-0lg7qWo")'}}></div>
                                <div>
                                    <p className="text-text-main dark:text-white text-xl font-bold leading-normal mb-2">コラボレーション</p>
                                    <p className="text-text-secondary dark:text-gray-400 text-sm leading-relaxed">分散型チームや外部パートナー向けのシームレスなワークフローツール。</p>
                                </div>
                            </Link>
                            <Link to="/solutions" className="flex flex-col gap-4 group cursor-pointer">
                                <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-sm transition-transform duration-300 group-hover:-translate-y-1" 
                                     style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDab7qZGyOmcDgNC6zWti5333ySBWIe7NT5RE7Ryzwq335j3w4Pxddpz98b9qS3P69ejEZ6RAiem12VyuKTger9w4hTv7_5ur0kz8exOQYsdfju0fqs2kyCr6IHdF9WGUVg7J2sFCsji7FmZFTTuT4L9NcFkQyf8SGrn4d5o_Omr9nE077NTqjjGXZRQuKVjP2HjFE-8X963MYiJ9WvIglIkBgPaaMTVor11_oHFFRqv_fSQxKuioCt-waIp85YfLvcQmuGhOx-dPQ")'}}></div>
                                <div>
                                    <p className="text-text-main dark:text-white text-xl font-bold leading-normal mb-2">アナリティクス</p>
                                    <p className="text-text-secondary dark:text-gray-400 text-sm leading-relaxed">高度なダッシュボードでコンテンツのパフォーマンスに関する実用的なインサイトを取得。</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Merits */}
            <div className="relative w-full bg-background-light dark:bg-background-dark py-20">
                <div className="layout-container flex justify-center">
                    <div className="flex flex-col w-full max-w-[1280px] px-4 md:px-10">
                        <div className="text-center mb-16">
                            <h2 className="text-text-main dark:text-white text-3xl md:text-4xl font-black leading-tight mb-4">
                                導入のメリット
                            </h2>
                            <p className="text-text-secondary dark:text-gray-400 text-lg max-w-2xl mx-auto">
                                信頼性と革新性を通じて、ビジネスのデジタルオペレーションの拡大を自信を持ってサポートします。
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex flex-col p-8 rounded-2xl bg-white dark:bg-gray-800 border border-[#e7ebf3] dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                                <div className="text-primary mb-6">
                                    <span className="material-symbols-outlined" style={{fontSize: '40px'}}>bolt</span>
                                </div>
                                <h3 className="text-text-main dark:text-white text-xl font-bold mb-3">業務効率化</h3>
                                <p className="text-text-secondary dark:text-gray-400 text-base leading-relaxed">
                                    インテリジェントな自動化ツールでワークフローを合理化し、手作業のオーバーヘッドを削減。チームの膨大な時間を節約します。
                                </p>
                            </div>
                            <div className="flex flex-col p-8 rounded-2xl bg-white dark:bg-gray-800 border border-[#e7ebf3] dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                                <div className="text-primary mb-6">
                                    <span className="material-symbols-outlined" style={{fontSize: '40px'}}>shield_lock</span>
                                </div>
                                <h3 className="text-text-main dark:text-white text-xl font-bold mb-3">銀行レベルのセキュリティ</h3>
                                <p className="text-text-secondary dark:text-gray-400 text-base leading-relaxed">
                                    知的財産は最も貴重な資産です。エンタープライズレベルの暗号化とアクセス制御で保護します。
                                </p>
                            </div>
                            <div className="flex flex-col p-8 rounded-2xl bg-white dark:bg-gray-800 border border-[#e7ebf3] dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                                <div className="text-primary mb-6">
                                    <span className="material-symbols-outlined" style={{fontSize: '40px'}}>trending_up</span>
                                </div>
                                <h3 className="text-text-main dark:text-white text-xl font-bold mb-3">無限の拡張性</h3>
                                <p className="text-text-secondary dark:text-gray-400 text-base leading-relaxed">
                                    インフラはお客様と共に成長します。スタートアップからエンタープライズまで、大規模なライブラリやトラフィックの急増にも問題なく対応します。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Bottom */}
            <div className="relative w-full py-24 bg-primary text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                <div className="layout-container flex justify-center relative z-10">
                    <div className="flex flex-col items-center w-full max-w-[800px] px-6 text-center">
                        <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">コンテンツ戦略を変革する準備はできていますか？</h2>
                        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl">
                            デジタルアセット管理と配信のニーズにおいて、業界のリーダーたちが信頼するLYNKSに参加しましょう。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <button className="flex items-center justify-center h-14 px-8 rounded-lg bg-white text-primary text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
                                今すぐ始める
                            </button>
                            <button className="flex items-center justify-center h-14 px-8 rounded-lg bg-transparent border-2 border-white text-white text-lg font-bold hover:bg-white/10 transition-colors">
                                デモを予約する
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white dark:bg-[#0d121b] border-t border-[#e7ebf3] dark:border-gray-800 pt-16 pb-8">
                <div className="layout-container flex justify-center">
                    <div className="flex flex-col w-full max-w-[1280px] px-4 md:px-10">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
                            <div className="col-span-1 md:col-span-1">
                                <Link className="block mb-6 text-text-main dark:text-white text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity" to="/">LYNKS</Link>
                                <p className="text-text-secondary dark:text-gray-400 text-sm leading-relaxed mb-6">
                                    世界をリードするメディア企業に、安全でスケーラブル、かつ効率的なコンテンツソリューションを提供します。
                                </p>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-text-secondary dark:text-gray-400 hover:text-primary cursor-pointer">
                                        <span className="material-symbols-outlined text-sm">public</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-text-secondary dark:text-gray-400 hover:text-primary cursor-pointer">
                                        <span className="material-symbols-outlined text-sm">alternate_email</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-text-main dark:text-white font-bold mb-6">サービス</h4>
                                <ul className="flex flex-col gap-3 text-sm text-text-secondary dark:text-gray-400">
                                    <li><Link className="hover:text-primary transition-colors" to="/">概要</Link></li>
                                    <li><Link className="hover:text-primary transition-colors" to="/solutions">権利管理</Link></li>
                                    <li><Link className="hover:text-primary transition-colors" to="/solutions">配信</Link></li>
                                    <li><Link className="hover:text-primary transition-colors" to="/solutions">アナリティクス</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-text-main dark:text-white font-bold mb-6">会社情報</h4>
                                <ul className="flex flex-col gap-3 text-sm text-text-secondary dark:text-gray-400">
                                    <li><a className="hover:text-primary transition-colors" href="#">私たちについて</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">採用情報</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">プレスリリース</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">お問い合わせ</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-text-main dark:text-white font-bold mb-6">法的情報</h4>
                                <ul className="flex flex-col gap-3 text-sm text-text-secondary dark:text-gray-400">
                                    <li><a className="hover:text-primary transition-colors" href="#">プライバシーポリシー</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">利用規約</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">セキュリティ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-[#e7ebf3] dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-text-secondary dark:text-gray-500 text-sm">© 2023 Sky Perfect JSAT Corporation. All rights reserved.</p>
                            <div className="flex gap-6">
                                <span className="text-text-secondary dark:text-gray-500 text-sm cursor-pointer hover:text-primary">English</span>
                                <span className="text-text-secondary dark:text-gray-500 text-sm font-bold cursor-pointer hover:text-primary">日本語</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ServiceIntro;