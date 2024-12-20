import type { JobBoardSponsor } from "@/types/2024/types";

type JobBoardSponsorList = {
  ja: JobBoardSponsor[];
  en: JobBoardSponsor[];
};

export const sponsors: JobBoardSponsorList = {
  ja: [
    // venue sponsors
    {
      name: "GMOペパボ株式会社",
      imgSrc: "/static/2024/sponsors/gmo_pepabo.png",
      description:
        "GMOペパボは、「人類のアウトプットを増やす」をミッションに、表現者やクリエイターを支援するサービスを展開しています。" +
        "1,710万点以上の作品が販売・展示されている国内最大のハンドメイドマーケット「minne」をはじめ、イラストレーターやYouTuber、お笑い芸人から企業まで77万超のクリエイターが登録するオリジナルグッズ作成・販売サービス「SUZURI」など個人から法人まで幅広くご利用いただいています。" +
        "オリジナルグッズ作成・販売サービス「SUZURI」ではグッズと投稿画像の合成にRustを活用しています。" +
        "現在GMOペパボではRustが書けるソフトウェアエンジニア他、エンジニアリングリード、デザイナーなど幅広く募集をしております。" +
        "少しでも興味がある方は、ぜひカジュアル面談でお話ししましょう！",
      url: "https://recruit.pepabo.com/info/career/joblist-engineer/#info-career-joblist",
    },
    // gold sponsors
    {
      name: "株式会社KICONIA WORKS",
      imgSrc: "/static/2024/sponsors/kiconia_logo_typ2.png",
      description:
        "KICONIA WORKSは、機械学習、数理最適化、アプリケーション開発などを通じて、" +
        "さまざまな業界の大手企業から中小企業まで、幅広い企業の課題解決をサポートする会社です。" +
        "少数精鋭のチームで迅速かつ高品質なサービスを提供し、年間40〜50件のプロジェクトを手がけています。" +
        "また、働く時間や環境に縛られず、新しいサービスの開発や研究開発を通じて、" +
        "エンジニアが自己実現できる機会も提供しています。\n" +
        "当社では、顧客やマーケットのニーズに合わせて、適切な技術や言語を選定しています。" +
        "その中で、数理最適化の分野や巷ではライブラリの整備されていない分野でのアプリケーション開発では" +
        "Rustを選択することも多く、難易度の高いプロジェクトに一緒に取り組んでいただける仲間を募集しています。" +
        "様々な働き方や関係性があると思います。まずは是非フランクにお話しましょう。",
      url: "https://kiconiaworks.com/contact/",
    },
    {
      name: "Fairy Devices株式会社",
      imgSrc: "/static/2024/sponsors/fairydevices.png",
      description:
        "Fairy Devicesでは、自社開発の首掛け型ウェアラブルデバイスTHINKLETと音声AIプラットフォーム" +
        "mimiによって、現場DXサービスを提供しています。私たちはデバイスと音声処理技術をもとに、" +
        "インターネットに存在しない情報をデータ化し、機械知能が理解可能にすること、" +
        "その結果として人類のあらゆる知識を叡智として流通可能にすることを目指しています。\n" +
        "当社では2019年よりプロダクトにRustを採用し始めました。現在主要なプロダクトのバックエンド" +
        "すべてにおいて、Rustを第一言語として開発しており、" +
        "Rustを使って業務を行いたい開発者の方々を強く歓迎します。" +
        "新しい技術やものづくりに関心の強いメンバーが多くドッグフーディングを推奨しています。 " +
        "少しでも興味がある方はぜひカジュアル面談でお話しましょう。",
      url: "https://open.talentio.com/r/1/c/fairydevices/homes/4010",
    },
    {
      name: "株式会社一休",
      imgSrc: "/static/2024/sponsors/ikyu_com_1.png",
      description:
        "【テクノロジーを活用し上質な体験を提供する】\n" +
        "一休は、上質な宿やレストランなどのWeb予約サービス「一休.com」を提供しています。" +
        "ホテルやレストランの予約管理業務を極限まで自動化して、本来のサービス提供に集中できる世界を構築したい。" +
        "ユーザーに、最も快適な予約体験で目的に合ったベストなホテルやレストラン選びを提供したい。" +
        "両者を実現し、結びつけるのが私たちのミッションです。\n" +
        "一休では2023年からRustを導入しており、レストラン予約サイトのバックエンドを中心にRustを活用しています。" +
        "一休でのプロダクト開発に興味がある方は、ぜひカジュアル面談からお気軽にご応募ください。",
      url: "https://www.ikyu.co.jp/recruit/engineer",
    },

    {
      name: "ユニークビジョン株式会社",
      imgSrc: "/static/2024/sponsors/UNIQUEVISION_logo_4to3.png",
      description:
        "【バズったあのキャンペーンもユニークビジョンのプロダクトを使っているかも!?】\n" +
        "ユニークビジョンはSNSマーケティングツール「Belugaシリーズ」を開発・提供。" +
        "SNSで企業と消費者のより良いブランド体験を創出することを使命としているエンジニア中心の会社です。" +
        "移り変わりの激しいITの世界で、その時々に求められることやまだ見ぬ新しい価値を実現していくため、" +
        "開発手法や技術選定も柔軟に検討し続けています。\n" +
        "Rust は 2016 年から導入を始め、 Web API（フレームワークには Actix Web や Axum を使用）や" +
        "クローラなどの常駐プログラム、メモリ使用量を抑えたい処理など様々な場面で採用されており、" +
        "現在では全ての自社サービスで Rust を使用しています。" +
        "Rust が好きな社員が活躍中です！興味がある方はぜひカジュアル面談でお話ししましょう。",
      url: "https://www.uniquevision.co.jp/recruit-engineer",
    },
    {
      name: "株式会社アークエッジ・スペース",
      imgSrc: "/static/2024/sponsors/ArkEdgeSpace_BRANDLOGO-RGB-Ver001.png",
      description:
        "アークエッジ・スペースは多様なミッションへの挑戦を通じ" +
        "小型衛星を用いたサービス・宇宙利用価値を創出し続ける" +
        '"小型衛星システム総合インテグレーター"となることを目指します。' +
        "小型人工衛星の組み込みソフトウェア、地上局システムから業務で使われるソフトウェアも" +
        "含めて現時点で最も開発体験の良い言語の一つであるRust を採用しています。" +
        "Rust や宇宙開発の業務経験がなくても、積極的に挑戦する意欲があり、" +
        "アークエッジ・スペース の Mission, Vision, Core Value に共感できる方を歓迎します。",
      url: "https://herp.careers/v1/arkedgespace",
    },
    {
      name: "AGC株式会社",
      imgSrc: "/static/2024/sponsors/AGC_GroupBrandLogo_EmblemType_png.png",
      description:
        "御社からのメッセージ：\n" +
        "AGCグループは、祖業のガラス事業を起点として、化学品、セラミックス、電子部材と、" +
        "産業の高度化に欠かせない素材・ソリューションを世界に届けています。" +
        "デジタル・イノベーション推進部はデジタル技術の開発と活用の推進による" +
        "イノベーションの加速をミッションの一つとし、妥協のないスクラム内製開発を進めています。\n" +
        "現在はチームトポロジーに従い組織を拡大しておりRustが書けるソフトウェアエンジニア他" +
        "PdM, デザイナー、テックリードなど幅広く募集しています。" +
        "他にも数理最適化のチームでもRustの採用が進んでおりアルゴリズムに強みのある人にも活躍いただけると思います。" +
        "いずれのポジションもカジュアル面談なども柔軟に対応しますのでお気軽にご応募ください。",
      url: "https://www.agc.com/recruiting/careers/",
    },
    {
      name: "株式会社NATTOSYSTEM",
      imgSrc: "/static/2024/sponsors/NATTOSYSTEM_logo.svg",
      description:
        "弊社は、世界中で利用されている開発ツール「JetBrains」の数少ない公式代理店として、" +
        "提案販売から導入サポートまでを担当しています。" +
        "ポテンシャルの大きい日本市場において、 5年間で10倍の成長を目指しています。" +
        "今回は事業の立ち上げメンバーとして、カスタマーサクセス(Customer Success)の社員を募集します。" +
        "あなたのIT知識を活かして、スタートアップで活躍してみませんか？ ",
      url: "https://nattosystem.com/support/faq/detail/400",
    },
    // silver sponsors
    {
      name: "株式会社LabBase",
      imgSrc: "/static/2024/sponsors/LabBase_corp_200.png",
      description:
        "我々は、研究者の可能性を最大化させる" +
        "「研究エンパワープラットフォーム」の創造を目指しています。" +
        "「人×資金×情報」が流通する研究開発エコシステムの構築に、" +
        "実用性と性能を兼ね備えたRustを利用しています。" +
        "エンジニア組織は、特定のやり方にこだわらず最適な技術を駆使し、" +
        "失敗から学び、また挑戦する「Crazy Engineering」を掲げており、" +
        "Rustを使って業務やサービス構築を行いたい開発者を歓迎しています。\n" +
        "カジュアル面談でお話ししてみませんか？",
      url: "https://labbase.co.jp/engineer/",
    },
    {
      name: "BLUEPRINT Holdings, Limited",
      imgSrc: "/static/2024/sponsors/bp_logo.png",
      description:
        "クリプト特化の自己勘定型ヘッジファンドで、トレーディングシステムをRustで開発しませんか？\n\n" +
        "BLUEPRINTではメイン事業である「SaaS特化のスタートアップファクトリー事業」を通じて、" +
        "複数のSaaS事業を運営する子会社を生み出しています。" +
        "そして、この事業で得られた売却益を運用するため、" +
        "クリプト特化のトレーディングシステムを用いたファンド事業を新たに立ち上げました。\n\n" +
        "トレーディングシステムには高いパフォーマンスが求められるため、Rustを採用しています。" +
        "チームはまだ少数であるため、裁量を持って幅広い機能の設計・実装を担当したい方を募集中です。" +
        "少しでも興味がある方は、ぜひカジュアル面談でお話ししましょう！",
      url: "https://blueprint-trading.net/",
    },
    {
      name: "株式会社Jij",
      imgSrc: "/static/2024/sponsors/jij.png",
      description:
        "Jijは量子技術と数理最適化技術に強みを持つグローバルスタートアップです。" +
        "私たちは、複雑な最適化問題に対して独自のアルゴリズムと先進的なソフトウェアを開発し、" +
        "様々な産業分野での社会実装に力を入れています。" +
        "量子コンピューティングと数理最適化の力で、従来解決が困難だった問題に挑む、" +
        "常に最先端の技術開発に挑戦する環境があります。" +
        "優秀な仲間たちと切磋琢磨しながら、自身の可能性を最大限に引き出せる仕事に携わりませんか。" +
        "「社会を計算可能にし、人類の進歩に貢献する」。" +
        "そんな私たちのビジョンに共感し、共に成長したい方をお待ちしています。",
      url: "https://www.j-ij.com/ja/recruit",
    },
  ],
  en: [], // Copied from ja later
};

sponsors.en = sponsors.ja;
