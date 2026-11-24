const stars = [
  [52, 46], [132, 90], [228, 40], [336, 72], [428, 36], [560, 62],
  [92, 158], [302, 132], [516, 140], [592, 194]
];

export function PixelHero() {
  return <div className="hero-art pixel-hero-art" role="img" aria-label="Góc làm việc pixel art với màn hình lập trình, trăng, núi và cây nhỏ">
    <svg className="pixel-scene" viewBox="0 0 640 520" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" aria-hidden="true">
      <rect width="640" height="520" fill="#253755" />
      <rect y="240" width="640" height="280" fill="#233b4a" />
      <path d="M0 288h56v-24h40v-24h48v24h40v24h40v-48h48v-24h48v24h40v48h40v-32h40v-24h48v24h40v32h72v232H0Z" fill="#344e61" />
      <path d="M0 342h72v-20h56v-20h48v20h48v20h64v-24h64v-20h64v20h48v24h48v-28h64v28h64v178H0Z" fill="#1a3044" />
      {stars.map(([x, y]) => <g key={`${x}-${y}`} fill="#ffe4a3"><rect x={x} y={y} width="8" height="8" /><rect x={x - 8} y={y + 8} width="24" height="8" /><rect x={x} y={y + 16} width="8" height="8" /></g>)}
      <path d="M444 62h64v8h16v16h8v64h-8v16h-16v8h-64v-8h-16v-16h-8V86h8V70h16Z" fill="#ffdb83" />
      <rect x="428" y="94" width="8" height="40" fill="#f5b96d" /><rect x="452" y="70" width="40" height="8" fill="#fff0ad" />
      <path d="M32 120h32v-8h56v8h24v16H32Zm146 48h40v-8h56v8h24v16H178Z" fill="#91a4ba" />
      <rect y="382" width="640" height="16" fill="#172537" /><rect y="398" width="640" height="122" fill="#263347" />
      <rect x="0" y="430" width="640" height="8" fill="#33445b" /><rect x="0" y="478" width="640" height="8" fill="#33445b" />
      <rect x="70" y="368" width="504" height="24" fill="#131d30" /><rect x="86" y="392" width="24" height="128" fill="#131d30" /><rect x="534" y="392" width="24" height="128" fill="#131d30" />
      <rect x="78" y="360" width="488" height="12" fill="#f5b974" />
      <rect x="152" y="176" width="328" height="184" fill="#101a2d" /><rect x="168" y="192" width="296" height="144" fill="#82d9bd" />
      <rect x="184" y="208" width="264" height="112" fill="#18394a" />
      <rect x="200" y="224" width="64" height="8" fill="#ffdd88" /><rect x="272" y="224" width="32" height="8" fill="#e992a1" />
      <rect x="216" y="248" width="96" height="8" fill="#a8e8d4" /><rect x="320" y="248" width="64" height="8" fill="#aaa7eb" />
      <rect x="216" y="264" width="136" height="8" fill="#87b5ca" /><rect x="216" y="280" width="72" height="8" fill="#ffb77e" />
      <rect x="296" y="280" width="96" height="8" fill="#a8e8d4" /><rect x="216" y="296" width="40" height="8" fill="#aaa7eb" />
      <rect x="304" y="336" width="24" height="32" fill="#101a2d" /><rect x="264" y="360" width="104" height="8" fill="#101a2d" />
      <rect x="250" y="392" width="146" height="12" fill="#131d30" /><rect x="266" y="404" width="114" height="8" fill="#708499" />
      <rect x="486" y="332" width="48" height="32" fill="#f8eac3" /><rect x="526" y="340" width="16" height="16" fill="#f8eac3" /><rect x="498" y="364" width="24" height="8" fill="#c98776" />
      <rect x="96" y="328" width="52" height="36" fill="#db8a6e" /><rect x="104" y="364" width="36" height="8" fill="#aa5f63" />
      <rect x="116" y="304" width="12" height="24" fill="#6dc69d" /><rect x="100" y="296" width="16" height="24" fill="#79d6a5" /><rect x="128" y="288" width="16" height="32" fill="#79d6a5" /><rect x="108" y="280" width="12" height="20" fill="#a3e5aa" />
      <rect x="30" y="28" width="112" height="28" fill="#101a2d" /><text x="44" y="47" fill="#ffe4a3" fontFamily="monospace" fontSize="15" fontWeight="bold">KYP / DEV</text>
      <rect x="490" y="450" width="116" height="30" fill="#101a2d" /><text x="503" y="471" fill="#8ce3c2" fontFamily="monospace" fontSize="16" fontWeight="bold">LEVEL 01</text>
    </svg>
    <span className="pixel-scene-caption">HI, WORLD! <span aria-hidden="true">■</span> ĐANG XÂY NHỮNG ĐIỀU HAY</span>
  </div>;
}

export function PixelProjectArt({ slug }) {
  if (slug === 'atlas-journal') return <svg className="pixel-project-art" viewBox="0 0 600 350" preserveAspectRatio="xMidYMid slice" shapeRendering="crispEdges" aria-hidden="true">
    <rect width="600" height="350" fill="#a7c5ad" /><rect y="238" width="600" height="112" fill="#598d82" />
    <path d="M0 248h70v-32h44v-24h64v24h60v32h56v-48h64v-28h64v28h56v48h122v102H0Z" fill="#4a776d" />
    <path d="M440 54h64v12h16v16h8v56h-8v16h-16v8h-64v-8h-16v-16h-8V82h8V66h16Z" fill="#f7d48c" />
    <rect x="50" y="58" width="248" height="218" fill="#283f4a" /><rect x="62" y="70" width="224" height="194" fill="#f5e7c4" />
    <rect x="78" y="86" width="192" height="16" fill="#e6ad7a" /><rect x="78" y="120" width="150" height="16" fill="#273f4d" /><rect x="78" y="144" width="118" height="16" fill="#273f4d" />
    <rect x="78" y="184" width="192" height="56" fill="#a5c9af" /><path d="M78 240h56v-32h36v-16h36v16h28v-24h36v56Z" fill="#578d79" />
    <rect x="330" y="282" width="210" height="16" fill="#2c4b55" /><rect x="344" y="298" width="174" height="16" fill="#d8bd8d" />
    <rect x="380" y="112" width="16" height="56" fill="#344f50" /><rect x="364" y="136" width="48" height="16" fill="#344f50" />
  </svg>;
  if (slug === 'forma') return <svg className="pixel-project-art" viewBox="0 0 600 350" preserveAspectRatio="xMidYMid slice" shapeRendering="crispEdges" aria-hidden="true">
    <rect width="600" height="350" fill="#b6aee0" /><rect x="0" y="264" width="600" height="86" fill="#8b80c4" />
    <rect x="70" y="48" width="460" height="252" fill="#332e59" /><rect x="82" y="60" width="436" height="228" fill="#f1e9d8" />
    <rect x="82" y="60" width="436" height="36" fill="#6d65a9" /><rect x="98" y="72" width="12" height="12" fill="#f59c8d" /><rect x="122" y="72" width="12" height="12" fill="#ffda91" /><rect x="146" y="72" width="12" height="12" fill="#9be3c9" />
    <rect x="110" y="122" width="196" height="24" fill="#3f3a68" /><rect x="110" y="156" width="144" height="12" fill="#8a83ae" />
    <rect x="110" y="188" width="56" height="68" fill="#eaa095" /><rect x="178" y="172" width="56" height="84" fill="#b9b0df" /><rect x="246" y="204" width="56" height="52" fill="#9bd2c1" />
    <rect x="352" y="128" width="126" height="128" fill="#d9d2eb" /><rect x="368" y="144" width="94" height="16" fill="#eaa095" /><rect x="368" y="176" width="70" height="12" fill="#8a83ae" /><rect x="368" y="200" width="86" height="12" fill="#8a83ae" /><rect x="368" y="224" width="52" height="12" fill="#8a83ae" />
    <rect x="220" y="300" width="160" height="12" fill="#4d427f" />
  </svg>;
  return <svg className="pixel-project-art" viewBox="0 0 600 350" preserveAspectRatio="xMidYMid slice" shapeRendering="crispEdges" aria-hidden="true">
    <rect width="600" height="350" fill="#efb68d" /><rect y="260" width="600" height="90" fill="#ce926e" />
    <rect x="64" y="46" width="472" height="262" fill="#204e4d" /><rect x="80" y="62" width="440" height="230" fill="#f3dfb4" />
    <rect x="104" y="86" width="392" height="182" fill="#add2b3" />
    <path d="M104 126h84v-24h48v36h84v-28h64v44h112v114H104Z" fill="#7ba991" />
    <path d="M104 220h72v-42h64v30h72v-46h70v48h114v58H104Z" fill="#4d8c7e" />
    <rect x="160" y="126" width="24" height="24" fill="#ffe4a0" /><rect x="408" y="114" width="24" height="24" fill="#ffe4a0" />
    <path d="M284 114h48v12h16v16h8v44h-8v16h-16v12h-16v32h-16v-32h-16v-12h-16v-16h-8v-44h8v-16h16Z" fill="#254c50" />
    <rect x="284" y="138" width="48" height="48" fill="#ffce83" /><rect x="300" y="150" width="16" height="16" fill="#254c50" />
    <rect x="192" y="292" width="216" height="16" fill="#214546" /><rect x="216" y="308" width="168" height="12" fill="#b2795f" />
  </svg>;
}
