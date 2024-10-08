import type { JobBoardSponsor } from "@/types/2023/types";

type JobBoardSponsorList = {
  ja: JobBoardSponsor[];
  en: JobBoardSponsor[];
};

export const sponsors: JobBoardSponsorList = {
  ja: [
    {
      name: "ユニークビジョン株式会社",
      imgSrc: "/static/2023/sponsors/uniquevision.jpg",
      description:
        "【バズったあのキャンペーンもユニークビジョンのプロダクトを使っているかも!?】\n" +
        "ユニークビジョンはSNSマーケティングツール「Belugaシリーズ」を開発・提供。SNSで企業と消費者のより良いブランド体験を創出することを使命としているエンジニア中心の会社です。移り変わりの激しいITの世界で、その時々に求められることやまだ見ぬ新しい価値を実現していくため、開発手法や技術選定も柔軟に検討し続けています。\n" +
        "Rust は 2016 年から導入を始め、 Web API（フレームワークには Actix Web や Axum を使用）やクローラなどの常駐プログラム、メモリ使用量を抑えたい処理など様々な場面で採用されており、現在では全ての自社サービスで Rust を使用しています。\n" +
        "Rust が好きな社員が活躍中です！興味がある方はぜひカジュアル面談でお話ししましょう。",
      url: "https://www.uniquevision.co.jp/recruit",
    },
    {
      name: "AGC株式会社",
      imgSrc: "/static/2023/sponsors/agc.png",
      description:
        "AGCグループは、祖業のガラス事業を起点として、化学品、セラミックス、電子部材と、産業の高度化に欠かせない素材・ソリューションを世界に届けています。デジタル・イノベーション推進部はデジタル技術の開発と活用の推進によるイノベーションの加速をミッションの一つとし、スピード感をもって内製開発を進めています。\n\n" +
        "現在はチームトポロジーに従い組織を拡大しておりRustが書けるソフトウェアエンジニア他PdM, デザイナー、テックリードなど幅広く募集しています。他にも数理最適化のチームでもRustの採用が進んでおりアルゴリズムに強みのある人にも活躍いただけると思います。カジュアル面談なども柔軟に対応しますのでお気軽にご応募ください。",
      url: "https://www.agc.com/recruiting/careers/",
    },
    {
      name: "FairyDevices",
      imgSrc: "/static/2023/sponsors/fairydevices.png",
      description: `Fairy Devicesでは、自社開発の首掛け型ウェアラブルデバイスTHINKLETと音声AIプラットフォームmimiによって、現場DXサービスを提供しています。私たちはデバイスと音声処理技術をもとに、インターネットに存在しない情報をデータ化し、機械知能が理解可能にすること、その結果として人類のあらゆる知識を叡智として流通可能にすることを目指しています。

当社では2019年よりプロダクトにRustを採用し始めました。現在主要なプロダクトのバックエンドすべてにおいて、Rustを第一言語として開発しており、Rustを使って業務を行いたい開発者の方々を強く歓迎します。
新しい技術やものづくりに関心の強いメンバーが多くドッグフーディングを推奨しています。 少しでも興味がある方はぜひカジュアル面談でお話しましょう。`,
      url: "https://fairydevices.notion.site/Fairy-Devices-9fd48971f95b4d888256e7ced62c5687",
    },
    {
      name: "株式会社ゆめみ",
      imgSrc: "/static/2023/sponsors/yumemi.png",
      description:
        "ゆめみは、日本CTO協会が実施した今年のエンジニアが選ぶ「開発者体験が良いイメージのある企業ランキング」6位に選ばれました。\n" +
        "ゆめみで働くおもしろさにはこんな特徴があります。\n" +
        "・一般的な受託ではなく、クライアントと共創しながら企画・開発から保守・運用まで一貫して携われるので、自分のやりたいことや最新テクノロジーを採用しながら挑戦できる！\n" +
        "・個々が持つ貴重な価値を発揮できるように、勉強し放題、給与自己決定、有給取り放題、副業し放題などの成長できる制度で常に学び続けられる！\n" +
        "これからも、「エンジニアが成長できる環境No.1」を目指し、一緒にチャレンジしてくれる仲間を募集しています。\n",
      url: "https://hrmos.co/pages/yumemi",
      inverse: true,
    },
    {
      name: "株式会社ペイルド",
      imgSrc: "/static/2023/sponsors/paild.png",
      description:
        "ペイルドは「新しい金融を切り拓く」をミッションに、山積する法人支出の課題をテクノロジーの力で解決し、企業の生産性の向上に真剣に取り組んでいます。クラウド型法人カード「paild」、クラウド型請求書支払いサービス「paild請求書払い」を軸に、決済とデータ管理を統合した国内初のAll-in-One型の支出管理サービスへの進化を目指しています。ペイルドでは、そのためのプロダクト開発を推進してくださるメンバーを募集しております！",
      url: "https://www.paild.co.jp/recruit",
    },
    {
      name: "株式会社LabBase",
      imgSrc: "/static/2023/sponsors/labbase.png",
      description:
        "プラットフォームを通して、3.5兆円に及ぶ研究関連市場に、国内最大の理系学生就職サービス「LabBase就職」をはじめ、テクノロジーでソリューションを提供しています。\n" +
        "実用性、性能の高さからRustを採用し、新規事業、プラットフォームをはじめ既存プロダクトのRustへの置き換えも進めております。\n" +
        "また、LabBaseのエンジニア組織は「Crazy Engineering」を掲げ、特定のやり方に拘らず、課題に対して最適な技術を駆使し、取り組んでいます。\n" +
        "Rustを使って業務やサービス構築を行いたい開発者を歓迎しております。カジュアル面談を通して、ぜひお話しましょう。",
      url: "https://labbase.co.jp/engineer/",
    },
    {
      name: "パイオニア株式会社",
      imgSrc: "/static/2023/sponsors/pioneer.png",
      description: ` 私たちパイオニアは、これまでに数多くの世界初のサービスを生み出してきました。
そのブランドは世界でも広く知られており、大きな財産となっています。そして、それらを生み出してきたのは、社名の通り、一人ひとりのパイオニア精神です。よく世の中では“モノ”から“コト”へと言われますが、私たちが目指すのはモビリティ（自動車を含む移動体）を中心とした、“モノ（ハード）”×“コト（サービス）”です。

2025年に向けた新企業ビジョン「未来の移動体験を創ります」のもと、SaaSソリューションカンパニーへの変革に向けて一緒に働く仲間を募集しています。
`,
      url: "https://hrmos.co/pages/pioneer01",
    },
  ],
  en: [], // Copied from ja later
};

sponsors.en = sponsors.ja;
