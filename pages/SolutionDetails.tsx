import React from 'react';
import { Link } from 'react-router-dom';

const SolutionDetails: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
            {/* Header */}
            <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur sticky top-0 z-50">
                <div className="px-4 md:px-10 py-3 max-w-7xl mx-auto flex items-center justify-between">
                    <Link className="text-2xl font-black tracking-tighter text-background-dark dark:text-white" to="/">
                        LYNKS
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-sm font-medium hover:text-primary transition-colors text-slate-700 dark:text-slate-300" to="/solutions">ソリューション</Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors text-slate-700 dark:text-slate-300" to="/solutions">機能一覧</Link>
                        <a className="text-sm font-medium hover:text-primary transition-colors text-slate-700 dark:text-slate-300" href="#">導入事例</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors text-slate-700 dark:text-slate-300" href="#">サポート</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="hidden sm:flex bg-primary hover:bg-primary/90 text-white text-sm font-bold h-10 px-5 rounded-lg items-center justify-center transition-colors">
                            デモを依頼する
                        </button>
                        <button className="md:hidden text-slate-900 dark:text-white">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero */}
                <section className="py-12 md:py-20 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col gap-6 max-w-2xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                                機能とソリューションの詳細
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                LYNKSでコンテンツ管理を効率化し、権利を保護し、世界中に配信します。正確性、スピード、そして妥協のないセキュリティで、あなたのデジタル資産を最大限に活用しましょう。
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="bg-primary hover:bg-primary/90 text-white h-12 px-8 rounded-lg font-bold text-base transition-colors flex items-center gap-2">
                                    <span>ワークフローを見る</span>
                                    <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
                                </button>
                                <button className="bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 h-12 px-8 rounded-lg font-bold text-base transition-colors">
                                    詳細はこちら
                                </button>
                            </div>
                        </div>
                        <div className="w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800 relative">
                            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAw1YwISCBGJiiPkgckxX9chCBDCRqv2lvDCQvve06nwJs0U2F-01MKTdQq3im0cXxgZ0AgjLfdGcSjzH5oCpQFF-cSkBDgFlkc2Bors9aB3YW2M1HWdSCmp23jwDCm2hcRctifRFvmNkjEtS3ep5fFQ4i8IdT6pBuOWOvY2QnJZEV8-LbP0SJS553_F1jqJbv4lyb5-EVi3U2N5oats0x7wqc-S64zwHnsrqiYcZPxE3yjsvyA0RabuQAOWQexGVYO37xZmXiSW0s')"}}></div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                        </div>
                    </div>
                </section>

                {/* Workflow */}
                <section className="py-16 border-t border-slate-200 dark:border-slate-800">
                    <div className="mb-12 text-center md:text-left">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">LYNKS ワークフロー</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl">インジェストからグローバル配信まで、自動化されたパイプラインがコンテンツを効率的に動かします。</p>
                    </div>
                    <div className="grid grid-cols-[60px_1fr] gap-x-6 max-w-4xl mx-auto md:mx-0">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center">
                            <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <span className="material-symbols-outlined">cloud_upload</span>
                            </div>
                            <div className="w-0.5 bg-slate-200 dark:bg-slate-700 h-full min-h-[80px]"></div>
                        </div>
                        <div className="pb-12 pt-2">
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">一元化されたインジェスト</h3>
                                <span className="text-sm font-medium text-primary uppercase tracking-wider">Step 1</span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400">生の素材を統一されたセキュアなクラウドバケットに直接アップロードします。APIまたはWebインターフェース経由で、高ビットレートのビデオ形式、RAW画像、大量のドキュメントアップロードをサポートします。</p>
                        </div>
                        {/* Step 2 */}
                        <div className="flex flex-col items-center">
                            <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <span className="material-symbols-outlined">label</span>
                            </div>
                            <div className="w-0.5 bg-slate-200 dark:bg-slate-700 h-full min-h-[80px]"></div>
                        </div>
                        <div className="pb-12 pt-2">
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">メタデータタグ付け</h3>
                                <span className="text-sm font-medium text-primary uppercase tracking-wider">Step 2</span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400">AI駆動のタグ付けにより、コンテンツを自動的に分類します。権利管理、地域制限、検索最適化のためにメタデータを手動で調整することも可能です。</p>
                        </div>
                        {/* Step 3 */}
                        <div className="flex flex-col items-center">
                            <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <span className="material-symbols-outlined">public</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">マルチプラットフォーム配信</h3>
                                <span className="text-sm font-medium text-primary uppercase tracking-wider">Step 3</span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400">OTTプラットフォーム、放送局、世界中のパートナーへ即座に配信します。自動トランスコーディングにより、各配信先に最適なフォーマットを保証します。</p>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-16 md:py-24 space-y-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">主な機能</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">メディアのプロフェッショナルのために構築されたエンタープライズグレードのツール。</p>
                    </div>
                    
                    {/* Feature 1 */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 flex flex-col gap-6">
                            <div className="size-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-2">
                                <span className="material-symbols-outlined text-3xl">database</span>
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">コンテンツデータベース管理</h3>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                あらゆるアセットを瞬時に検索可能にします。高度な検索エンジンにより、フォーマット、日付、権利ステータス、AI生成タグでフィルタリングが可能です。大容量ファイルをダウンロードすることなく、高解像度のプロキシを即座にプレビューできます。
                            </p>
                            <ul className="space-y-3 mt-2">
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>フレーム精度のビデオ検索</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>カスタマイズ可能なメタデータスキーマ</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>バージョン管理と履歴追跡</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 h-[350px] md:h-[450px] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg relative group">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpd5Zl5O4Zv-suQTG9CA2cAC6UtLZJajMh4KXZkPkmUhqUpaz5rUq60RI5eeOXEWmruFXubq1Q8pq2fuLmW6wWm-JRBZBeCGVKHxt8IGeGpKAjXmxHkc2HHLDNY2Xz6_D_S9zEnzRIrynnEW2MQ--AmNijGVeHAgYfK6hWqM08N18wWTGHNMLFBmuQgnnP8vNPAju4Tfi9ESvV-ZIvLFsjc6Dt9bb831D-NoErL-kdWeaaIuBVEAoLVeLPYTzaCcRQyc6DIPX3zTo')"}}></div>
                            <div className="absolute inset-0 bg-black/10 dark:bg-black/40"></div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="h-[350px] md:h-[450px] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg relative group">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOq5f16IANtcM11bDAT7ysjrJOB-vrqOoIhGz1Z_e8rAzQXVR8jO6QwVMjzvevnYQQrC0oCLkWNkG8XpCLe3clQNAqCmeIS98kyWGCZzm0wzR4225EQ-G0PTeGJEBCaljVtQ-iWDoOxttXyurcjWFCsPginNIhj7D51BGy0TIJN1wHB6P6kyIDawioCnVC3KEyQVH2RN1ryGyRRbug8eBQMlVSGDWZ5jXb08NsIoZEkKKb09N9pjtQBfW3TIntsSc0eKAu5xFxUQc')"}}></div>
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="size-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-2">
                                <span className="material-symbols-outlined text-3xl">security</span>
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">権利管理・トラッキング</h3>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                コンプライアンスの心配はもう不要です。LYNKSはライセンスの有効期限、地域制限、使用制限を自動的に追跡します。システムは配信が行われる前に潜在的な違反にフラグを立てます。
                            </p>
                            <ul className="space-y-3 mt-2">
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>有効期限の自動アラート</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>ジオブロッキング機能</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>契約書のリンク機能</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 flex flex-col gap-6">
                            <div className="size-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-2">
                                <span className="material-symbols-outlined text-3xl">hub</span>
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">セキュアな配信チャネル</h3>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                軍事レベルの暗号化でパートナーへコンテンツを配信します。プレスキットや試写室用にカスタムブランドのポータルを作成可能です。誰がコンテンツを閲覧・ダウンロードしたかをリアルタイムで追跡できます。
                            </p>
                            <ul className="space-y-3 mt-2">
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>Aspera & Signiant 統合</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>オンザフライでの電子透かし</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>全転送の監査ログ</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 h-[350px] md:h-[450px] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg relative group">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNq2-YWnYhNJ3mTDkvsZqycza3IQaJ5cIf9MynA9BpOxVdIS9PFJkVAaS68WQMvmKAmK5IVm7dzLJ8VUmiZPSgCz4puj3pNVPiwV6ovuhVTTC2YkH5usQ-ApGAdsDO55k2ozJSbFXKs2xBOEr3I1wBOJPXEZKYBPWkpyE24yEYDY3lQiHkv6XBbcHebVVBPi5Yo9-XBpqX8DzX4OhTRYZnkRQjeeSIJ3as9lFnWRSFtuA0mKPwigGYYb0H1_TnsP4Wc2e_X-24VuA')"}}></div>
                        </div>
                    </div>
                </section>

                {/* Case Studies */}
                <section className="py-20 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-4">導入事例</h2>
                            <p className="text-slate-600 dark:text-slate-400 max-w-xl">先進的な組織がどのようにLYNKSを活用してメディア業務を変革しているかをご覧ください。</p>
                        </div>
                        <a className="text-primary font-bold hover:underline flex items-center gap-1" href="#">
                            すべての事例を見る <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Case 1 */}
                        <div className="group cursor-pointer flex flex-col h-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 dark:border-slate-800">
                            <div className="h-48 w-full overflow-hidden">
                                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrUi3o0gdvcV9uqGfRyssRFgIFHXlWHIkudHiaRS0gzAuBCysOowq0JhYJHLwDykFsK5GRR49qoRmgoeHZqE87qAWwyzY49y39m-rwdRn3rVqSz5SY8XdkYZQ_Ca4hcm_QS4r3xFKf7ZKFHypomEvad85RGWgEmSFK7ehi8nes3h2DHYrmhMtwpHsgoQarPUM7nxt3BBRe1duQqth9mSTqPNYh1hACCSmLvYOnwEA_AEAvB8223bf8g5b5mgWYyZ3xT92SxsreesA')"}}></div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <span className="text-xs font-bold text-primary uppercase tracking-wide mb-2">放送業界</span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">グローバル・ニュース・ネットワーク</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1">
                                    アーカイブ検索時間を40%短縮し、12の地域での迅速なニュース報道を実現しました。
                                </p>
                                <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                    記事を読む <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                </span>
                            </div>
                        </div>
                        {/* Case 2 */}
                        <div className="group cursor-pointer flex flex-col h-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 dark:border-slate-800">
                            <div className="h-48 w-full overflow-hidden">
                                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJVW5kdXa9bwJT86myAyFU4STUc7cj_OBRKdvyfu9hEfZVDI7RcLxrr3DOdR88_9kGy50zzHRJlFAOsFC-qavIPtwnw7F9YS27YvE_H68VYOXwNiQfMRtOGwjdWQXwGcCV7vHWL1IOD4XJfCr3jY8BKn5ynXz_VHmx7leXwkIFy9q3Rl_rVJXUa1xA_cGM8fzYrWlvcYpDJUqO_KKAreD38Y_SxbCFEAob4NeBcat3_nJFJMp56r--uocMRXXPMAf_zMRdhzVRfN8')"}}></div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <span className="text-xs font-bold text-primary uppercase tracking-wide mb-2">教育</span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">EduTech パイオニア</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1">
                                    50,000時間以上の教材を世界中の学習管理システムに安全に配信しました。
                                </p>
                                <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                    記事を読む <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                </span>
                            </div>
                        </div>
                        {/* Case 3 */}
                        <div className="group cursor-pointer flex flex-col h-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 dark:border-slate-800">
                            <div className="h-48 w-full overflow-hidden">
                                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFEhKUYFHMGrYP8PjP3hD-Fhuje4O_CBZR-Fkksbc6bdtQeTliX_Q4Bm0b1NwaNVwzSMJXS5xdZEsCBOp3G5ubNQHMc9vItMzuEm_QlVZKfBjYnLe-voLza01t_4tibsNJ-tgprJr0IE-GAaEYtx1hfKEd7MZ8sc1DOE58BZbQtNgoKOnYT4k6yedD8KG_ohxhCuYnLvlimYh6Yn3zqZBihkTQvI9tWQSsVkaTvt3_n5gEp7IMOXOocWTKLJD5dJ8jxvVfAU2uQzw')"}}></div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <span className="text-xs font-bold text-primary uppercase tracking-wide mb-2">大企業</span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">大手テック企業</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1">
                                    世界30拠点のマーケティング資産を一元管理し、ブランドの一貫性と権利コンプライアンスを確保しました。
                                </p>
                                <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                    記事を読む <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent"></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">コンテンツワークフローを合理化する準備はできましたか？</h2>
                            <p className="text-slate-300 mb-8 text-lg">LYNKSを利用する世界中の主要な放送局や企業に加わりましょう。</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-primary hover:bg-primary/90 text-white h-12 px-8 rounded-lg font-bold text-base transition-colors">
                                    デモを予約する
                                </button>
                                <button className="bg-transparent border border-white/20 hover:bg-white/10 text-white h-12 px-8 rounded-lg font-bold text-base transition-colors">
                                    営業に問い合わせる
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                        <div className="col-span-2 lg:col-span-2">
                            <Link className="inline-block mb-6 text-2xl font-black tracking-tighter text-background-dark dark:text-white" to="/">
                                LYNKS
                            </Link>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
                                現代のメディア企業のための完全なデジタルアセット管理エコシステム。スカパーJSAT株式会社が提供しています。
                            </p>
                            <div className="flex gap-4">
                                <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                                    <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg>
                                </a>
                                <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                                    <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                                </a>
                                <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                                    <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">ソリューション</h3>
                            <ul className="space-y-3">
                                <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors" to="/solutions">インジェストと管理</Link></li>
                                <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors" to="/solutions">セキュアなストレージ</Link></li>
                                <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors" to="/solutions">グローバル配信</Link></li>
                                <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors" to="/solutions">権利管理</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">サポート</h3>
                            <ul className="space-y-3">
                                <li><a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors" href="#">ドキュメント</a></li>
                                <li><a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors" href="#">APIリファレンス</a></li>
                                <li><a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors" href="#">ステータス</a></li>
                                <li><a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors" href="#">お問い合わせ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">会社情報</h3>
                            <ul className="space-y-3">
                                <li><a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors" href="#">私たちについて</a></li>
                                <li><a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors" href="#">採用情報</a></li>
                                <li><a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors" href="#">ニュース</a></li>
                                <li><a className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors" href="#">法的情報</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm">© 2024 LYNKS. All rights reserved.</p>
                        <p className="text-slate-500 text-sm">スカパーJSAT株式会社によるサービス</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SolutionDetails;