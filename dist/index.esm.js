import React, { useState, useEffect, useCallback, useMemo } from 'react';

const LEVELS = [{
  lv: 5,
  xp: 0,
  title: "Apprentice Operator",
  ability: null
}, {
  lv: 6,
  xp: 150,
  title: "Control Plane Scout",
  ability: {
    icon: "🔭",
    name: "Read the Scheduler",
    desc: "You can predict where a pod will land and why"
  }
}, {
  lv: 7,
  xp: 300,
  title: "Node Wrangler",
  ability: {
    icon: "🐉",
    name: "Tame the Pod",
    desc: "You can debug any CrashLoopBackOff without panic"
  }
}, {
  lv: 8,
  xp: 500,
  title: "Network Weaver",
  ability: {
    icon: "🕸️",
    name: "Bend Traffic to Your Will",
    desc: "Route, restrict, and expose services confidently"
  }
}, {
  lv: 9,
  xp: 700,
  title: "Helm Forger",
  ability: {
    icon: "⚒️",
    name: "Craft Deployable Artifacts",
    desc: "Write a production Helm chart from scratch"
  }
}, {
  lv: 10,
  xp: 1000,
  title: "Cluster Warlord ★",
  ability: {
    icon: "👑",
    name: "GitOps Omniscience",
    desc: "Trace any prod issue from Git commit to running pod"
  }
}];
const ACTS = [{
  id: "I",
  cls: "act-I",
  name: "The Architecture Trials",
  subtitle: "Control plane · Pods · Deployments",
  xp: 300,
  lore: "You have used the blade. Now learn its make. The control plane is a black box no more. Complete these trials to earn the title of Node Wrangler.",
  reward: {
    icon: "🐉",
    title: "Node Wrangler unlocked",
    desc: "Ability: Tame the Pod — you can now debug any CrashLoopBackOff"
  },
  quests: [{
    id: "1-1",
    title: "Study the control plane: API server, etcd, scheduler, controller manager",
    xp: 40,
    tags: ["kubectl", "~2h"],
    boss: false
  }, {
    id: "1-2",
    title: "Master the pod lifecycle: creation, scheduling, restarts, termination",
    xp: 30,
    tags: ["kubectl", "~1.5h"],
    boss: false
  }, {
    id: "1-3",
    title: "Learn ReplicaSets, Deployments, and DaemonSets — when to use each",
    xp: 40,
    tags: ["manifests", "~2h"],
    boss: false
  }, {
    id: "1-4",
    title: "Understand ConfigMaps, Secrets, and environment injection",
    xp: 30,
    tags: ["manifests", "~1.5h"],
    boss: false
  }, {
    id: "1-5",
    title: "BOSS: Deploy a multi-container app (Django + Postgres) — must survive kubectl delete pod",
    xp: 160,
    tags: ["minikube", "~3h", "BOSS"],
    boss: true
  }]
}, {
  id: "II",
  cls: "act-II",
  name: "The Network Labyrinth",
  subtitle: "Services · Ingress · DNS · Network Policies",
  xp: 200,
  lore: "The pods speak to each other in whispers. Learn to hear them — then learn to silence them. Networking is where engineers go to suffer. Emerge from the labyrinth and claim the title of Network Weaver.",
  reward: {
    icon: "🕸️",
    title: "Network Weaver unlocked",
    desc: "Ability: Bend Traffic to Your Will — Ingress, DNS, and NetworkPolicy mastered"
  },
  quests: [{
    id: "2-1",
    title: "Understand ClusterIP, NodePort, and LoadBalancer — draw the traffic path",
    xp: 30,
    tags: ["networking", "~2h"],
    boss: false
  }, {
    id: "2-2",
    title: "Master in-cluster DNS: how svc-name.namespace.svc.cluster.local resolves",
    xp: 30,
    tags: ["coredns", "~1.5h"],
    boss: false
  }, {
    id: "2-3",
    title: "Configure nginx-ingress with routing rules and TLS termination",
    xp: 40,
    tags: ["ingress", "~2h"],
    boss: false
  }, {
    id: "2-4",
    title: "Write a NetworkPolicy that isolates your app's namespace",
    xp: 30,
    tags: ["security", "~1.5h"],
    boss: false
  }, {
    id: "2-5",
    title: "BOSS: Expose app via Ingress with a real TLS cert via cert-manager",
    xp: 70,
    tags: ["cert-manager", "~3h", "BOSS"],
    boss: true
  }]
}, {
  id: "III",
  cls: "act-III",
  name: "The Helm Forge",
  subtitle: "Charts · Templates · Values · Releases",
  xp: 200,
  lore: "Raw YAML is the weapon of savages. A true engineer forges charts. Descend into the Forge and emerge with a reusable, versioned Helm chart.",
  reward: {
    icon: "⚒️",
    title: "Helm Forger unlocked",
    desc: "Ability: Craft Deployable Artifacts — helm install deploys your app from zero"
  },
  quests: [{
    id: "3-1",
    title: "Learn Helm fundamentals: charts, values.yaml, templates, releases",
    xp: 25,
    tags: ["helm", "~1.5h"],
    boss: false
  }, {
    id: "3-2",
    title: "Master Go templating: conditionals, loops, named templates",
    xp: 40,
    tags: ["helm", "~2h"],
    boss: false
  }, {
    id: "3-3",
    title: "Implement dev/prod value overrides with -f flags",
    xp: 30,
    tags: ["helm", "~1.5h"],
    boss: false
  }, {
    id: "3-4",
    title: "Add Helm hooks and a subchart dependency to your chart",
    xp: 35,
    tags: ["helm", "~2h"],
    boss: false
  }, {
    id: "3-5",
    title: "BOSS: Convert all manifests into a Helm chart — helm install from zero",
    xp: 70,
    tags: ["helm", "~4h", "BOSS"],
    boss: true
  }]
}, {
  id: "IV",
  cls: "act-IV",
  name: "The GitOps Ascension",
  subtitle: "Flux CD · HelmRelease · Debugging · HPA",
  xp: 300,
  lore: "You have mastered the cluster. Now make the cluster master itself. GitOps means the cluster heals itself from Git. Complete the Capstone and ascend to Cluster Warlord.",
  reward: {
    icon: "👑",
    title: "Cluster Warlord ★ unlocked",
    desc: "Ability: GitOps Omniscience — you have achieved mastery of the control plane"
  },
  quests: [{
    id: "4-1",
    title: "Understand GitOps: declarative infra, reconciliation loop, drift detection",
    xp: 30,
    tags: ["gitops", "~1.5h"],
    boss: false
  }, {
    id: "4-2",
    title: "Deep dive Flux CD: HelmRelease, Kustomization, ImageAutomation",
    xp: 60,
    tags: ["flux", "~3h"],
    boss: false
  }, {
    id: "4-3",
    title: "Master the prod debugging toolkit: describe, logs, exec, events, top",
    xp: 50,
    tags: ["kubectl", "~2h"],
    boss: false
  }, {
    id: "4-4",
    title: "Configure HPA + resource requests/limits on your app",
    xp: 40,
    tags: ["scaling", "~2h"],
    boss: false
  }, {
    id: "4-5",
    title: "FINAL BOSS: Deploy via Flux — push image tag, cluster auto-updates with zero manual kubectl",
    xp: 120,
    tags: ["flux", "helm", "~5h", "FINAL BOSS"],
    boss: true
  }]
}];
const ACHIEVEMENTS = [{
  id: "first-blood",
  icon: "🥇",
  name: "First Blood",
  desc: "Complete your first quest"
}, {
  id: "crashloop",
  icon: "💀",
  name: "CrashLoopSurvivor",
  desc: "Fix a CrashLoopBackOff in the wild"
}, {
  id: "webmaster",
  icon: "🕸️",
  name: "Webmaster",
  desc: "Successfully curl your app through Ingress + TLS"
}, {
  id: "chart-maker",
  icon: "📦",
  name: "Chart Maker",
  desc: "helm install works first try"
}, {
  id: "the-loop",
  icon: "🔁",
  name: "The Loop",
  desc: "Watch Flux auto-reconcile a drift"
}, {
  id: "speed-runner",
  icon: "⚡",
  name: "Speed Runner",
  desc: "Complete a boss battle in under 2 hours"
}, {
  id: "act1-done",
  icon: "🏰",
  name: "Act I Complete",
  desc: "All Architecture Trials cleared"
}, {
  id: "act2-done",
  icon: "🌐",
  name: "Act II Complete",
  desc: "The Labyrinth has been conquered"
}, {
  id: "act3-done",
  icon: "⚒️",
  name: "Act III Complete",
  desc: "The Forge has been mastered"
}, {
  id: "warlord",
  icon: "👑",
  name: "Cluster Warlord",
  desc: "All 4 Acts complete. Max level reached."
}];
const SPELLS = [{
  name: "Reveal all pods",
  cmd: "kubectl get pods -A"
}, {
  name: "Inspect a fallen warrior",
  cmd: "kubectl describe pod <n>"
}, {
  name: "Stream battle log",
  cmd: "kubectl logs <pod> -f"
}, {
  name: "Enter the pod realm",
  cmd: "kubectl exec -it <pod> -- sh"
}, {
  name: "Forge a release",
  cmd: "helm install <n> ./chart -f values.yaml"
}, {
  name: "Reforge a release",
  cmd: "helm upgrade --install <n> ./chart"
}, {
  name: "Survey the GitOps realm",
  cmd: "flux get all"
}, {
  name: "Force Git reconciliation",
  cmd: "flux reconcile source git flux-system"
}, {
  name: "Diagnose cluster vitals",
  cmd: "kubectl top nodes && kubectl top pods"
}];

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$6 = ":root{--bg:#0d0a06;--bg2:#13100a;--surface:#1a1510;--surface2:#221c14;--border:#3d3020;--border2:#5a4530;--ember:#f97316;--ember2:#fbbf24;--ember3:#fde68a;--muted:#8a7055;--dim:#5a4535}.CharacterSheet-module__charSheet___rHsP-{animation:CharacterSheet-module__fadeIn___LE9LW .4s ease backwards;background:var(--surface);border:1px solid var(--border2);margin:3rem auto;max-width:900px;padding:0 1.5rem;position:relative}.CharacterSheet-module__charSheet___rHsP-:after,.CharacterSheet-module__charSheet___rHsP-:before{background:var(--bg);color:var(--ember);content:\"◆\";font-size:1rem;padding:0 .5rem;position:absolute;top:-.6rem}.CharacterSheet-module__charSheet___rHsP-:before{left:2rem}.CharacterSheet-module__charSheet___rHsP-:after{right:2rem}.CharacterSheet-module__sectionTitle___TfhZa{border-bottom:1px solid var(--border);color:var(--ember);font-family:Cinzel,serif;font-size:.7rem;letter-spacing:.25em;margin-bottom:1.5rem;padding:1.2rem 0 1rem;text-transform:uppercase}.CharacterSheet-module__charGrid___o-yKD{display:grid;gap:1.5rem;grid-template-columns:1fr 1fr;padding-bottom:1.5rem}@media (max-width:600px){.CharacterSheet-module__charGrid___o-yKD{grid-template-columns:1fr}}.CharacterSheet-module__charStat___h8d7Q{display:flex;flex-direction:column;gap:.2rem}.CharacterSheet-module__statLabel___0tOMn{color:var(--muted);font-family:Share Tech Mono,monospace;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase}.CharacterSheet-module__statValue___uyG--{color:var(--ember2);font-family:Cinzel,serif;font-size:1.1rem}.CharacterSheet-module__xpSection___iT36l{border-top:1px solid var(--border);padding:1.5rem 0}.CharacterSheet-module__xpHeader___u95qq{align-items:baseline;display:flex;justify-content:space-between;margin-bottom:.6rem}.CharacterSheet-module__xpLabel___hODiz{color:var(--muted);font-family:Share Tech Mono,monospace;font-size:.65rem;letter-spacing:.15em}.CharacterSheet-module__xpNumbers___RuFGn{color:var(--ember2);font-family:Share Tech Mono,monospace;font-size:.85rem}.CharacterSheet-module__xpTrack___6Ouax{background:var(--bg);border:1px solid var(--border2);border-radius:1px;height:10px;overflow:hidden}.CharacterSheet-module__xpFill___PczbG{background:linear-gradient(90deg,#c2410c,var(--ember),var(--ember2));height:100%;position:relative;transition:width .8s cubic-bezier(.22,1,.36,1)}.CharacterSheet-module__xpFill___PczbG:after{background:#fff;bottom:0;content:\"\";filter:blur(2px);opacity:.6;position:absolute;right:0;top:0;width:4px}.CharacterSheet-module__levelDisplay___Js4RX{align-items:center;display:flex;gap:1.5rem;margin-top:1rem}.CharacterSheet-module__levelBadge___ME92c{align-items:center;background:var(--surface2);border:2px solid var(--ember);display:flex;flex-direction:column;flex-shrink:0;height:64px;justify-content:center;position:relative;width:64px}.CharacterSheet-module__levelBadge___ME92c:after,.CharacterSheet-module__levelBadge___ME92c:before{border:1px solid var(--ember2);content:\"\";height:8px;position:absolute;width:8px}.CharacterSheet-module__levelBadge___ME92c:before{border-bottom:none;border-right:none;left:-4px;top:-4px}.CharacterSheet-module__levelBadge___ME92c:after{border-left:none;border-top:none;bottom:-4px;right:-4px}.CharacterSheet-module__levelNum___1ld5k{color:var(--ember2);font-family:Cinzel,serif;font-size:1.8rem;font-weight:900;line-height:1}.CharacterSheet-module__levelWord___VddZS{color:var(--muted);font-family:Share Tech Mono,monospace;font-size:.5rem;letter-spacing:.1em}.CharacterSheet-module__levelTitleDisplay___ivEER{flex:1}.CharacterSheet-module__currentTitle___6M7Pm{color:var(--ember2);display:block;font-family:Cinzel,serif;font-size:1.3rem}.CharacterSheet-module__nextLevelHint___3ptRx{color:var(--muted);font-size:.82rem;font-style:italic;margin-top:.2rem}.CharacterSheet-module__abilitiesGrid___t7Jmt{display:flex;flex-direction:column;gap:.6rem;padding-bottom:1.5rem}.CharacterSheet-module__ability___kVg4J{align-items:center;background:var(--bg2);border:1px solid var(--border);display:flex;gap:1rem;overflow:hidden;padding:.8rem 1rem;position:relative;transition:all .2s}.CharacterSheet-module__ability___kVg4J.CharacterSheet-module__locked___RsPeF{opacity:.4}.CharacterSheet-module__ability___kVg4J.CharacterSheet-module__unlocked___mY-cT{background:#f973160d;border-color:#f9731666}.CharacterSheet-module__ability___kVg4J.CharacterSheet-module__unlocked___mY-cT:before{background:linear-gradient(180deg,var(--ember2),var(--ember));bottom:0;content:\"\";left:0;position:absolute;top:0;width:3px}.CharacterSheet-module__abilityIcon___rz6n9{flex-shrink:0;font-size:1.3rem;text-align:center;width:2rem}.CharacterSheet-module__abilityInfo___Goh5y{flex:1}.CharacterSheet-module__abilityName___gMnd7{color:var(--ember3);display:block;font-family:Cinzel,serif;font-size:.9rem;margin-bottom:.1rem}.CharacterSheet-module__ability___kVg4J.CharacterSheet-module__locked___RsPeF .CharacterSheet-module__abilityName___gMnd7{color:var(--muted)}.CharacterSheet-module__abilityDesc___88H9f{color:var(--muted);font-size:.82rem;font-style:italic}.CharacterSheet-module__abilityLevel___7OHW1{color:var(--dim);font-family:Share Tech Mono,monospace;font-size:.6rem;letter-spacing:.1em}@keyframes CharacterSheet-module__fadeIn___LE9LW{0%{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}";
var styles$6 = {"charSheet":"CharacterSheet-module__charSheet___rHsP-","sectionTitle":"CharacterSheet-module__sectionTitle___TfhZa","charGrid":"CharacterSheet-module__charGrid___o-yKD","charStat":"CharacterSheet-module__charStat___h8d7Q","statLabel":"CharacterSheet-module__statLabel___0tOMn","statValue":"CharacterSheet-module__statValue___uyG--","xpSection":"CharacterSheet-module__xpSection___iT36l","xpHeader":"CharacterSheet-module__xpHeader___u95qq","xpLabel":"CharacterSheet-module__xpLabel___hODiz","xpNumbers":"CharacterSheet-module__xpNumbers___RuFGn","xpTrack":"CharacterSheet-module__xpTrack___6Ouax","xpFill":"CharacterSheet-module__xpFill___PczbG","levelDisplay":"CharacterSheet-module__levelDisplay___Js4RX","levelBadge":"CharacterSheet-module__levelBadge___ME92c","levelNum":"CharacterSheet-module__levelNum___1ld5k","levelWord":"CharacterSheet-module__levelWord___VddZS","levelTitleDisplay":"CharacterSheet-module__levelTitleDisplay___ivEER","currentTitle":"CharacterSheet-module__currentTitle___6M7Pm","nextLevelHint":"CharacterSheet-module__nextLevelHint___3ptRx","abilitiesGrid":"CharacterSheet-module__abilitiesGrid___t7Jmt","ability":"CharacterSheet-module__ability___kVg4J","locked":"CharacterSheet-module__locked___RsPeF","unlocked":"CharacterSheet-module__unlocked___mY-cT","abilityIcon":"CharacterSheet-module__abilityIcon___rz6n9","abilityInfo":"CharacterSheet-module__abilityInfo___Goh5y","abilityName":"CharacterSheet-module__abilityName___gMnd7","abilityDesc":"CharacterSheet-module__abilityDesc___88H9f","abilityLevel":"CharacterSheet-module__abilityLevel___7OHW1"};
styleInject(css_248z$6);

const CharacterSheet = ({
  state,
  totalXP,
  currentLevel
}) => {
  const xp = totalXP;
  const level = currentLevel;
  const nextLevel = LEVELS.find(l => l.xp > xp);
  const xpPercent = xp / 1000 * 100;
  return /*#__PURE__*/React.createElement("div", {
    className: styles$6.charSheet
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$6.sectionTitle
  }, "\xA7 Character Sheet"), /*#__PURE__*/React.createElement("div", {
    className: styles$6.charGrid
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$6.charStat
  }, /*#__PURE__*/React.createElement("span", {
    className: styles$6.statLabel
  }, "Class"), /*#__PURE__*/React.createElement("span", {
    className: styles$6.statValue
  }, "Backend Engineer")), /*#__PURE__*/React.createElement("div", {
    className: styles$6.charStat
  }, /*#__PURE__*/React.createElement("span", {
    className: styles$6.statLabel
  }, "Specialization"), /*#__PURE__*/React.createElement("span", {
    className: styles$6.statValue
  }, "Django \xB7 FastAPI \xB7 K8s")), /*#__PURE__*/React.createElement("div", {
    className: styles$6.charStat
  }, /*#__PURE__*/React.createElement("span", {
    className: styles$6.statLabel
  }, "Starting Level"), /*#__PURE__*/React.createElement("span", {
    className: styles$6.statValue
  }, "5 \u2014 Apprentice Operator")), /*#__PURE__*/React.createElement("div", {
    className: styles$6.charStat
  }, /*#__PURE__*/React.createElement("span", {
    className: styles$6.statLabel
  }, "Current Title"), /*#__PURE__*/React.createElement("span", {
    className: styles$6.statValue
  }, level.title))), /*#__PURE__*/React.createElement("div", {
    className: styles$6.xpSection
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$6.xpHeader
  }, /*#__PURE__*/React.createElement("span", {
    className: styles$6.xpLabel
  }, "EXPERIENCE POINTS"), /*#__PURE__*/React.createElement("span", {
    className: styles$6.xpNumbers
  }, /*#__PURE__*/React.createElement("span", null, xp), " / 1000 XP")), /*#__PURE__*/React.createElement("div", {
    className: styles$6.xpTrack
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$6.xpFill,
    style: {
      width: `${xpPercent}%`
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: styles$6.levelDisplay
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$6.levelBadge
  }, /*#__PURE__*/React.createElement("span", {
    className: styles$6.levelNum
  }, level.lv), /*#__PURE__*/React.createElement("span", {
    className: styles$6.levelWord
  }, "LEVEL")), /*#__PURE__*/React.createElement("div", {
    className: styles$6.levelTitleDisplay
  }, /*#__PURE__*/React.createElement("span", {
    className: styles$6.currentTitle
  }, level.title), /*#__PURE__*/React.createElement("div", {
    className: styles$6.nextLevelHint
  }, nextLevel ? `${nextLevel.xp - xp} XP until Level ${nextLevel.lv} — ${nextLevel.title}` : '★ Maximum level achieved. You are the Cluster Warlord.')))), /*#__PURE__*/React.createElement("div", {
    className: styles$6.sectionTitle
  }, "\xA7 Abilities"), /*#__PURE__*/React.createElement("div", {
    className: styles$6.abilitiesGrid
  }, LEVELS.slice(1).map(l => {
    const unlocked = level.lv >= l.lv;
    return /*#__PURE__*/React.createElement("div", {
      key: l.lv,
      className: `${styles$6.ability} ${unlocked ? styles$6.unlocked : styles$6.locked}`
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$6.abilityIcon
    }, l.ability.icon), /*#__PURE__*/React.createElement("div", {
      className: styles$6.abilityInfo
    }, /*#__PURE__*/React.createElement("span", {
      className: styles$6.abilityName
    }, l.ability.name), /*#__PURE__*/React.createElement("span", {
      className: styles$6.abilityDesc
    }, l.ability.desc)), /*#__PURE__*/React.createElement("span", {
      className: styles$6.abilityLevel
    }, "LV ", l.lv));
  })));
};

var css_248z$5 = ":root{--bg2:#13100a;--surface:#1a1510;--border:#3d3020;--border2:#5a4530;--ember:#f97316;--ember2:#fbbf24;--blood:#dc2626;--ice:#67e8f9;--violet:#a78bfa;--sage:#4ade80;--text:#e8d5b0;--muted:#8a7055;--dim:#5a4535}.ActsContainer-module__acts___-2jhN{margin:0 auto 3rem;max-width:900px;padding:0 1.5rem}.ActsContainer-module__actCard___sFCzt{animation:ActsContainer-module__fadeIn___OtlqY .4s ease backwards;background:var(--surface);border:1px solid var(--border);margin-bottom:1.5rem;overflow:hidden;position:relative}.ActsContainer-module__actCard___sFCzt:before{bottom:0;content:\"\";left:0;position:absolute;top:0;width:3px}.ActsContainer-module__actI___in-XN:before{background:linear-gradient(180deg,var(--ice),var(--violet))}.ActsContainer-module__actII___qR0tX:before{background:linear-gradient(180deg,var(--violet),var(--blood))}.ActsContainer-module__actIII___89KBy:before{background:linear-gradient(180deg,var(--ember),var(--ember2))}.ActsContainer-module__actIV___e-SBR:before{background:linear-gradient(180deg,var(--ember2),var(--sage))}.ActsContainer-module__actHeader___-IzPh{align-items:center;cursor:pointer;display:flex;gap:1rem;padding:1.2rem 1.5rem;user-select:none}.ActsContainer-module__actHeader___-IzPh:hover{background:#ffffff05}.ActsContainer-module__actRoman___OmBbk{color:var(--ember);flex-shrink:0;font-family:Cinzel,serif;font-size:1.4rem;font-weight:900;text-shadow:0 0 20px #f9731680;width:2rem}.ActsContainer-module__actInfo___K1Swz{flex:1}.ActsContainer-module__actName___Jvr5H{color:var(--text);display:block;font-family:Cinzel,serif;font-size:1rem;font-weight:700}.ActsContainer-module__actSubtitle___7hgND{color:var(--muted);font-size:.82rem;font-style:italic}.ActsContainer-module__actXpBadge___ktlTA{border:1px solid #fbbf244d;color:var(--ember2);font-family:Share Tech Mono,monospace;font-size:.65rem;letter-spacing:.1em;padding:.2rem .6rem;white-space:nowrap}.ActsContainer-module__actProgressRing___-l0qW{flex-shrink:0;height:40px;position:relative;width:40px}.ActsContainer-module__actProgressRing___-l0qW svg{transform:rotate(-90deg)}.ActsContainer-module__ringBg___PwBu-{fill:none;stroke:var(--border2);stroke-width:3}.ActsContainer-module__ringFill___jE1E2{fill:none;stroke:var(--ember);stroke-width:3;stroke-linecap:round;transition:stroke-dashoffset .6s ease}.ActsContainer-module__ringText___g-fyW{align-items:center;color:var(--muted);display:flex;font-family:Share Tech Mono,monospace;font-size:.6rem;inset:0;justify-content:center;position:absolute}.ActsContainer-module__actArrow___mUdBE{color:var(--dim);font-size:.7rem;transition:transform .2s}.ActsContainer-module__actArrow___mUdBE.ActsContainer-module__open___81kEh{transform:rotate(90deg)}.ActsContainer-module__actBody___owvV9{border-top:1px solid var(--border)}.ActsContainer-module__actLore___1Sgae{background:var(--bg2);border-bottom:1px solid var(--border);color:var(--muted);font-size:.88rem;font-style:italic;line-height:1.7;padding:1rem 1.5rem}.ActsContainer-module__actLore___1Sgae:before{color:var(--ember);content:'\" ';font-size:1.2rem}.ActsContainer-module__actLore___1Sgae:after{color:var(--ember);content:' \"';font-size:1.2rem}.ActsContainer-module__quests___dOe1j{display:flex;flex-direction:column;gap:.5rem;padding:1rem 1.5rem}.ActsContainer-module__quest___UIJa9{align-items:flex-start;border:1px solid #0000;cursor:pointer;display:flex;gap:1rem;padding:.75rem 1rem;position:relative;transition:all .15s}.ActsContainer-module__quest___UIJa9:hover{background:#ffffff05;border-color:var(--border)}.ActsContainer-module__quest___UIJa9.ActsContainer-module__boss___-krM-{background:#dc26260a;border-color:#dc262633;margin-top:.5rem}.ActsContainer-module__quest___UIJa9.ActsContainer-module__boss___-krM-:hover{background:#dc262614;border-color:#dc262680}.ActsContainer-module__quest___UIJa9.ActsContainer-module__done___FjKwJ{opacity:.45}.ActsContainer-module__quest___UIJa9.ActsContainer-module__done___FjKwJ .ActsContainer-module__questTitle___O-hvz{text-decoration:line-through}.ActsContainer-module__questCheckbox___UXgP3{align-items:center;border:1.5px solid var(--border2);display:flex;flex-shrink:0;font-size:.7rem;height:18px;justify-content:center;margin-top:2px;transition:all .2s;width:18px}.ActsContainer-module__quest___UIJa9.ActsContainer-module__boss___-krM- .ActsContainer-module__questCheckbox___UXgP3{border-color:#dc262680}.ActsContainer-module__quest___UIJa9.ActsContainer-module__done___FjKwJ .ActsContainer-module__questCheckbox___UXgP3{background:var(--sage);border-color:var(--sage);color:#000}.ActsContainer-module__questContent___KB81-{flex:1}.ActsContainer-module__questTitle___O-hvz{color:var(--text);font-size:.92rem;line-height:1.4}.ActsContainer-module__quest___UIJa9.ActsContainer-module__boss___-krM- .ActsContainer-module__questTitle___O-hvz{color:#fca5a5}.ActsContainer-module__questMeta___rdjW5{align-items:center;display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.3rem}.ActsContainer-module__qTag___6ezAx{border-radius:1px;font-family:Share Tech Mono,monospace;font-size:.6rem;letter-spacing:.05em;padding:.1rem .4rem}.ActsContainer-module__qTool___5aYsp{background:#67e8f914;border:1px solid #67e8f926;color:var(--ice)}.ActsContainer-module__qTime___rK97Z{background:#ffffff0a;border:1px solid var(--border);color:var(--muted)}.ActsContainer-module__qXp___EN6zt{background:#fbbf2414;border:1px solid #fbbf2433;color:var(--ember2)}.ActsContainer-module__qBoss___4H0yr{background:#dc262614;border:1px solid #dc26264d;color:#fca5a5}.ActsContainer-module__bossSkull___GByRr{font-size:1rem;margin-right:.25rem}.ActsContainer-module__actReward___hqMUv{align-items:center;background:#f973160a;border-top:1px solid var(--border);display:flex;gap:1rem;padding:1rem 1.5rem}.ActsContainer-module__rewardIcon___J2UUw{font-size:1.4rem}.ActsContainer-module__rewardText___WiT9M{flex:1;font-size:.85rem}.ActsContainer-module__rewardTitle___WD0OH{color:var(--ember2);display:block;font-family:Cinzel,serif;font-size:.8rem;margin-bottom:.1rem}.ActsContainer-module__rewardDesc___lS92n{color:var(--muted);font-size:.82rem;font-style:italic}@keyframes ActsContainer-module__fadeIn___OtlqY{0%{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}";
var styles$5 = {"acts":"ActsContainer-module__acts___-2jhN","actCard":"ActsContainer-module__actCard___sFCzt","fadeIn":"ActsContainer-module__fadeIn___OtlqY","actI":"ActsContainer-module__actI___in-XN","actII":"ActsContainer-module__actII___qR0tX","actIII":"ActsContainer-module__actIII___89KBy","actIV":"ActsContainer-module__actIV___e-SBR","actHeader":"ActsContainer-module__actHeader___-IzPh","actRoman":"ActsContainer-module__actRoman___OmBbk","actInfo":"ActsContainer-module__actInfo___K1Swz","actName":"ActsContainer-module__actName___Jvr5H","actSubtitle":"ActsContainer-module__actSubtitle___7hgND","actXpBadge":"ActsContainer-module__actXpBadge___ktlTA","actProgressRing":"ActsContainer-module__actProgressRing___-l0qW","ringBg":"ActsContainer-module__ringBg___PwBu-","ringFill":"ActsContainer-module__ringFill___jE1E2","ringText":"ActsContainer-module__ringText___g-fyW","actArrow":"ActsContainer-module__actArrow___mUdBE","open":"ActsContainer-module__open___81kEh","actBody":"ActsContainer-module__actBody___owvV9","actLore":"ActsContainer-module__actLore___1Sgae","quests":"ActsContainer-module__quests___dOe1j","quest":"ActsContainer-module__quest___UIJa9","boss":"ActsContainer-module__boss___-krM-","done":"ActsContainer-module__done___FjKwJ","questTitle":"ActsContainer-module__questTitle___O-hvz","questCheckbox":"ActsContainer-module__questCheckbox___UXgP3","questContent":"ActsContainer-module__questContent___KB81-","questMeta":"ActsContainer-module__questMeta___rdjW5","qTag":"ActsContainer-module__qTag___6ezAx","qTool":"ActsContainer-module__qTool___5aYsp","qTime":"ActsContainer-module__qTime___rK97Z","qXp":"ActsContainer-module__qXp___EN6zt","qBoss":"ActsContainer-module__qBoss___4H0yr","bossSkull":"ActsContainer-module__bossSkull___GByRr","actReward":"ActsContainer-module__actReward___hqMUv","rewardIcon":"ActsContainer-module__rewardIcon___J2UUw","rewardText":"ActsContainer-module__rewardText___WiT9M","rewardTitle":"ActsContainer-module__rewardTitle___WD0OH","rewardDesc":"ActsContainer-module__rewardDesc___lS92n"};
styleInject(css_248z$5);

const ActsContainer = ({
  state,
  onQuestClick
}) => {
  const [openActs, setOpenActs] = useState({
    'I': true
  });
  const toggleAct = actId => {
    setOpenActs(prev => ({
      ...prev,
      [actId]: !prev[actId]
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: styles$5.acts
  }, ACTS.map((act, i) => {
    const done = act.quests.filter(q => state.quests[q.id]).length;
    const total = act.quests.length;
    const circumference = 2 * Math.PI * 15;
    const offset = circumference * (1 - done / total);
    const isOpen = openActs[act.id];
    return /*#__PURE__*/React.createElement("div", {
      key: act.id,
      className: `${styles$5.actCard} ${styles$5[act.cls]}`
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$5.actHeader,
      onClick: () => toggleAct(act.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: styles$5.actRoman
    }, act.id), /*#__PURE__*/React.createElement("div", {
      className: styles$5.actInfo
    }, /*#__PURE__*/React.createElement("span", {
      className: styles$5.actName
    }, act.name), /*#__PURE__*/React.createElement("span", {
      className: styles$5.actSubtitle
    }, act.subtitle)), /*#__PURE__*/React.createElement("span", {
      className: styles$5.actXpBadge
    }, act.xp, " XP"), /*#__PURE__*/React.createElement("div", {
      className: styles$5.actProgressRing
    }, /*#__PURE__*/React.createElement("svg", {
      width: "40",
      height: "40",
      viewBox: "0 0 40 40"
    }, /*#__PURE__*/React.createElement("circle", {
      className: styles$5.ringBg,
      cx: "20",
      cy: "20",
      r: "15"
    }), /*#__PURE__*/React.createElement("circle", {
      className: styles$5.ringFill,
      cx: "20",
      cy: "20",
      r: "15",
      strokeDasharray: circumference,
      strokeDashoffset: offset
    })), /*#__PURE__*/React.createElement("div", {
      className: styles$5.ringText
    }, done, "/", total)), /*#__PURE__*/React.createElement("span", {
      className: `${styles$5.actArrow} ${isOpen ? styles$5.open : ''}`
    }, "\u25B6")), isOpen && /*#__PURE__*/React.createElement("div", {
      className: styles$5.actBody
    }, /*#__PURE__*/React.createElement("div", {
      className: styles$5.actLore
    }, act.lore), /*#__PURE__*/React.createElement("div", {
      className: styles$5.quests
    }, act.quests.map(q => {
      const isBoss = q.boss;
      const isDone = !!state.quests[q.id];
      const tagHtml = q.tags.map(t => {
        if (t === 'BOSS' || t === 'FINAL BOSS') {
          return /*#__PURE__*/React.createElement("span", {
            key: t,
            className: `${styles$5.qTag} ${styles$5.qBoss}`
          }, "\u2694\uFE0F ", t);
        }
        if (t.startsWith('~')) {
          return /*#__PURE__*/React.createElement("span", {
            key: t,
            className: `${styles$5.qTag} ${styles$5.qTime}`
          }, t);
        }
        return /*#__PURE__*/React.createElement("span", {
          key: t,
          className: `${styles$5.qTag} ${styles$5.qTool}`
        }, t);
      });
      return /*#__PURE__*/React.createElement("div", {
        key: q.id,
        className: `${styles$5.quest} ${isBoss ? styles$5.boss : ''} ${isDone ? styles$5.done : ''}`,
        onClick: () => onQuestClick(q.id)
      }, /*#__PURE__*/React.createElement("div", {
        className: styles$5.questCheckbox
      }, isDone ? '✓' : ''), /*#__PURE__*/React.createElement("div", {
        className: styles$5.questContent
      }, /*#__PURE__*/React.createElement("div", {
        className: styles$5.questTitle
      }, isBoss && /*#__PURE__*/React.createElement("span", {
        className: styles$5.bossSkull
      }, "\uD83D\uDC80"), q.title), /*#__PURE__*/React.createElement("div", {
        className: styles$5.questMeta
      }, tagHtml, /*#__PURE__*/React.createElement("span", {
        className: `${styles$5.qTag} ${styles$5.qXp}`
      }, "+", q.xp, " XP"))));
    })), /*#__PURE__*/React.createElement("div", {
      className: styles$5.actReward
    }, /*#__PURE__*/React.createElement("span", {
      className: styles$5.rewardIcon
    }, act.reward.icon), /*#__PURE__*/React.createElement("div", {
      className: styles$5.rewardText
    }, /*#__PURE__*/React.createElement("span", {
      className: styles$5.rewardTitle
    }, act.reward.title), /*#__PURE__*/React.createElement("span", {
      className: styles$5.rewardDesc
    }, act.reward.desc)))));
  }));
};

var css_248z$4 = ":root{--bg2:#13100a;--border:#3d3020;--border2:#5a4530;--ember2:#fbbf24;--muted:#8a7055;--dim:#5a4535}.AchievementsGrid-module__achievementsGrid___xONZ3{display:grid;gap:.75rem;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));margin:0 auto;max-width:900px;padding-bottom:1.5rem;padding-left:1.5rem;padding-right:1.5rem}.AchievementsGrid-module__achievement___Eayj3{align-items:flex-start;animation:AchievementsGrid-module__fadeIn___N34c1 .4s ease backwards;background:var(--bg2);border:1px solid var(--border);cursor:pointer;display:flex;gap:.75rem;padding:.9rem 1rem;transition:all .2s}.AchievementsGrid-module__achievement___Eayj3:hover{border-color:var(--border2)}.AchievementsGrid-module__achievement___Eayj3.AchievementsGrid-module__earned___J44BS{background:#fbbf240d;border-color:#fbbf2459}.AchievementsGrid-module__achIcon___pw6n9{filter:grayscale(1);flex-shrink:0;font-size:1.4rem;line-height:1;transition:filter .3s}.AchievementsGrid-module__achievement___Eayj3.AchievementsGrid-module__earned___J44BS .AchievementsGrid-module__achIcon___pw6n9{filter:none}.AchievementsGrid-module__achInfo___j2ims{flex:1}.AchievementsGrid-module__achName___KjALR{color:var(--muted);display:block;font-family:Cinzel,serif;font-size:.78rem;margin-bottom:.2rem;transition:color .2s}.AchievementsGrid-module__achievement___Eayj3.AchievementsGrid-module__earned___J44BS .AchievementsGrid-module__achName___KjALR{color:var(--ember2)}.AchievementsGrid-module__achDesc___hEm9S{color:var(--dim);font-size:.75rem;font-style:italic;line-height:1.3}@keyframes AchievementsGrid-module__fadeIn___N34c1{0%{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}";
var styles$4 = {"achievementsGrid":"AchievementsGrid-module__achievementsGrid___xONZ3","achievement":"AchievementsGrid-module__achievement___Eayj3","earned":"AchievementsGrid-module__earned___J44BS","achIcon":"AchievementsGrid-module__achIcon___pw6n9","achInfo":"AchievementsGrid-module__achInfo___j2ims","achName":"AchievementsGrid-module__achName___KjALR","achDesc":"AchievementsGrid-module__achDesc___hEm9S"};
styleInject(css_248z$4);

const AchievementsGrid = ({
  state,
  onToggle
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$4.achievementsGrid
  }, ACHIEVEMENTS.map((a, i) => {
    const earned = !!state.achievements[a.id];
    const isToggleable = !a.id.startsWith('act') && a.id !== 'warlord';
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      className: `${styles$4.achievement} ${earned ? styles$4.earned : ''}`,
      style: {
        animationDelay: `${i * 0.05}s`
      },
      onClick: isToggleable ? () => onToggle(a.id) : undefined
    }, /*#__PURE__*/React.createElement("span", {
      className: styles$4.achIcon
    }, a.icon), /*#__PURE__*/React.createElement("div", {
      className: styles$4.achInfo
    }, /*#__PURE__*/React.createElement("span", {
      className: styles$4.achName
    }, a.name), /*#__PURE__*/React.createElement("span", {
      className: styles$4.achDesc
    }, a.desc)));
  }));
};

var css_248z$3 = ":root{--bg:#0d0a06;--bg2:#13100a;--surface:#1a1510;--border:#3d3020;--border2:#5a4530;--ember:#f97316;--sage:#4ade80;--text:#e8d5b0}.Spellbook-module__spellbook___oQGni{margin:0 auto 3rem;max-width:900px;padding:0 1.5rem}.Spellbook-module__charSheet___BoHKo{background:var(--surface);border:1px solid var(--border2);padding:0 1.5rem;position:relative}.Spellbook-module__charSheet___BoHKo:after,.Spellbook-module__charSheet___BoHKo:before{background:var(--bg);color:var(--ember);content:\"◆\";font-size:1rem;padding:0 .5rem;position:absolute;top:-.6rem}.Spellbook-module__charSheet___BoHKo:before{left:2rem}.Spellbook-module__charSheet___BoHKo:after{right:2rem}.Spellbook-module__sectionTitle___3VjMO{border-bottom:1px solid var(--border);color:var(--ember);font-family:Cinzel,serif;font-size:.7rem;letter-spacing:.25em;margin-bottom:1.5rem;padding:1.2rem 0 1rem;text-transform:uppercase}.Spellbook-module__spellGrid___QQ4i6{display:flex;flex-direction:column;gap:.4rem;padding-bottom:1.5rem}.Spellbook-module__spell___BHPX1{align-items:center;background:var(--bg2);border:1px solid var(--border);display:grid;gap:1rem;grid-template-columns:1fr 1fr;padding:.6rem .9rem}@media (max-width:600px){.Spellbook-module__spell___BHPX1{grid-template-columns:1fr}}.Spellbook-module__spellName___0WR5w{color:var(--text);font-size:.85rem}.Spellbook-module__spellCmd___SyeDp{background:#4ade800f;border:1px solid #4ade8026;color:var(--sage);cursor:pointer;font-family:Share Tech Mono,monospace;font-size:.72rem;overflow-x:auto;padding:.2rem .5rem;transition:all .15s;white-space:nowrap}.Spellbook-module__spellCmd___SyeDp:hover{background:#4ade801f;border-color:#4ade804d}";
var styles$3 = {"spellbook":"Spellbook-module__spellbook___oQGni","charSheet":"Spellbook-module__charSheet___BoHKo","sectionTitle":"Spellbook-module__sectionTitle___3VjMO","spellGrid":"Spellbook-module__spellGrid___QQ4i6","spell":"Spellbook-module__spell___BHPX1","spellName":"Spellbook-module__spellName___0WR5w","spellCmd":"Spellbook-module__spellCmd___SyeDp"};
styleInject(css_248z$3);

const Spellbook = () => {
  const copySpell = cmd => {
    navigator.clipboard.writeText(cmd).catch(() => {});
  };
  return /*#__PURE__*/React.createElement("div", {
    className: styles$3.spellbook
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$3.charSheet
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$3.sectionTitle
  }, "\xA7 Spellbook \u2014 Quick Commands"), /*#__PURE__*/React.createElement("div", {
    className: styles$3.spellGrid
  }, SPELLS.map((spell, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: styles$3.spell
  }, /*#__PURE__*/React.createElement("span", {
    className: styles$3.spellName
  }, spell.name), /*#__PURE__*/React.createElement("code", {
    className: styles$3.spellCmd,
    onClick: () => copySpell(spell.cmd)
  }, spell.cmd))))));
};

var css_248z$2 = ":root{--bg:#0d0a06;--bg2:#13100a;--surface:#1a1510;--surface2:#221c14;--border:#3d3020;--border2:#5a4530;--ember:#f97316;--ember2:#fbbf24;--sage:#4ade80;--muted:#8a7055;--dim:#5a4535}.QuizModal-module__quizBackdrop___ARu85{align-items:center;backdrop-filter:blur(4px);background:#000000d9;display:flex;inset:0;justify-content:center;opacity:0;padding:1rem;pointer-events:none;position:fixed;transition:opacity .3s ease;z-index:50000}.QuizModal-module__quizBackdrop___ARu85.QuizModal-module__active___CdCfB{opacity:1;pointer-events:all}.QuizModal-module__quizModal___LRjF1{background:var(--surface);border:1px solid var(--border2);max-height:90vh;max-width:680px;overflow-y:auto;position:relative;scrollbar-color:var(--border2) var(--bg);scrollbar-width:thin;transform:translateY(20px);transition:transform .3s ease;width:100%}.QuizModal-module__quizBackdrop___ARu85.QuizModal-module__active___CdCfB .QuizModal-module__quizModal___LRjF1{transform:translateY(0)}.QuizModal-module__quizModal___LRjF1:after,.QuizModal-module__quizModal___LRjF1:before{background:var(--surface);color:var(--ember);content:\"◆\";font-size:1rem;padding:0 .5rem;position:absolute;top:-.6rem}.QuizModal-module__quizModal___LRjF1:before{left:2rem}.QuizModal-module__quizModal___LRjF1:after{right:2rem}.QuizModal-module__quizHeader___hPRnV{background:var(--surface);border-bottom:1px solid var(--border);padding:1.5rem 1.5rem 1rem;position:sticky;top:0;z-index:10}.QuizModal-module__quizQuestTitle___9iMR9{color:var(--text);font-family:Cinzel,serif;font-size:1rem;font-weight:700;line-height:1.3;margin-bottom:.75rem}.QuizModal-module__quizMetaRow___2FeGr{align-items:center;display:flex;flex-wrap:wrap;gap:.5rem;justify-content:space-between}.QuizModal-module__quizTierBadges___tuad8{display:flex;gap:.4rem}.QuizModal-module__tierBadge___keUHq{border:1px solid;font-family:Share Tech Mono,monospace;font-size:.6rem;letter-spacing:.1em;padding:.15rem .5rem}.QuizModal-module__tierBadge___keUHq.QuizModal-module__beginner___Vnolt{background:#4ade800f;border-color:#4ade804d;color:var(--sage)}.QuizModal-module__tierBadge___keUHq.QuizModal-module__intermediate___hJ-B-{background:#fbbf240f;border-color:#fbbf244d;color:var(--ember2)}.QuizModal-module__tierBadge___keUHq.QuizModal-module__advanced___6WcGV{background:#f871710f;border-color:#f871714d;color:#f87171}.QuizModal-module__quizScoreDisplay___tWwMI{color:var(--muted);font-family:Share Tech Mono,monospace;font-size:.75rem}.QuizModal-module__quizProgressBar___1VsAX{background:var(--border);border-radius:2px;height:3px;margin-top:.75rem;overflow:hidden}.QuizModal-module__quizProgressFill___2ZASw{background:linear-gradient(90deg,var(--sage),var(--ember2));height:100%;transition:width .4s ease}.QuizModal-module__quizLoading___Y14cI{align-items:center;display:flex;flex-direction:column;gap:1.5rem;justify-content:center;padding:4rem 2rem}.QuizModal-module__quizLoadingIcon___62HyT{animation:QuizModal-module__spin___5mLlQ 2s linear infinite;font-size:2.5rem}@keyframes QuizModal-module__spin___5mLlQ{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.QuizModal-module__quizLoadingText___rZ1m4{color:var(--muted);font-family:Cinzel,serif;font-size:.9rem;font-style:italic;text-align:center}.QuizModal-module__quizLoadingSub___JbDRs{color:var(--dim);font-family:Share Tech Mono,monospace;font-size:.65rem;letter-spacing:.1em}.QuizModal-module__quizQuestions___LBUPl{display:flex;flex-direction:column;gap:1.5rem;padding:1.5rem}.QuizModal-module__quizBody___oDieI{min-height:200px}.QuizModal-module__questionBlock___TQo1n{background:var(--bg2);border:1px solid var(--border);opacity:0;padding:1.1rem 1.2rem;transform:translateY(8px);transition:opacity .3s ease,transform .3s ease}.QuizModal-module__questionBlock___TQo1n.QuizModal-module__visible___KmdOV{opacity:1;transform:translateY(0)}.QuizModal-module__questionBlock___TQo1n.QuizModal-module__correct___-F1i5{background:#4ade800a;border-color:#4ade8066}.QuizModal-module__questionBlock___TQo1n.QuizModal-module__wrong___m1gIk{background:#f871710a;border-color:#f8717166}.QuizModal-module__qTierLabel___EnyDT{display:inline-block;font-family:Share Tech Mono,monospace;font-size:.58rem;letter-spacing:.12em;margin-bottom:.5rem;padding:.1rem .4rem}.QuizModal-module__qTierLabel___EnyDT.QuizModal-module__beginner___Vnolt{color:var(--sage)}.QuizModal-module__qTierLabel___EnyDT.QuizModal-module__intermediate___hJ-B-{color:var(--ember2)}.QuizModal-module__qTierLabel___EnyDT.QuizModal-module__advanced___6WcGV{color:#f87171}.QuizModal-module__qNumber___pnfyC{color:var(--dim);font-family:Share Tech Mono,monospace;font-size:.6rem;margin-right:.4rem}.QuizModal-module__qText___Xq01D{color:var(--text);font-size:.95rem;line-height:1.5;margin-bottom:.9rem}.QuizModal-module__qOptions___-jL4f{display:flex;flex-direction:column;gap:.4rem}.QuizModal-module__qOption___qpozn{align-items:flex-start;border:1px solid var(--border);color:var(--muted);cursor:pointer;display:flex;font-size:.88rem;gap:.7rem;line-height:1.4;padding:.6rem .8rem;transition:all .15s}.QuizModal-module__qOption___qpozn:hover:not(.QuizModal-module__disabled___cDaZS){background:#ffffff05;border-color:var(--border2);color:var(--text)}.QuizModal-module__qOption___qpozn.QuizModal-module__selected___cYxa8{background:#f973160f;border-color:var(--ember);color:var(--text)}.QuizModal-module__qOption___qpozn.QuizModal-module__correctAns___bLi5f{background:#4ade8014!important;border-color:var(--sage)!important;color:var(--sage)!important}.QuizModal-module__qOption___qpozn.QuizModal-module__wrongAns___hd7qR{background:#f8717114!important;border-color:#f87171!important;color:#f87171!important}.QuizModal-module__qOption___qpozn.QuizModal-module__disabled___cDaZS{cursor:default}.QuizModal-module__qOptKey___JOlRX{color:var(--dim);flex-shrink:0;font-family:Share Tech Mono,monospace;font-size:.65rem;margin-top:1px;min-width:1.2rem}.QuizModal-module__qExplanation___Pavzx{border-left:2px solid var(--border2);color:var(--muted);display:none;font-size:.82rem;font-style:italic;line-height:1.5;margin-top:.75rem;padding:.6rem .8rem}.QuizModal-module__qExplanation___Pavzx.QuizModal-module__show___bepDj{display:block}.QuizModal-module__qExplanation___Pavzx.QuizModal-module__correctExp___LUZNz{border-color:var(--sage)}.QuizModal-module__qExplanation___Pavzx.QuizModal-module__wrongExp___fq-Oj{border-color:#f87171}.QuizModal-module__quizFooter___zIhvF{align-items:center;background:var(--surface);border-top:1px solid var(--border);bottom:0;display:flex;flex-wrap:wrap;gap:1rem;justify-content:space-between;padding:1.2rem 1.5rem;position:sticky}.QuizModal-module__quizResultMsg___sbe53{flex:1;font-family:Cinzel,serif;font-size:.85rem}.QuizModal-module__quizResultMsg___sbe53.QuizModal-module__pass___FayDE{color:var(--sage)}.QuizModal-module__quizResultMsg___sbe53.QuizModal-module__fail___Nle-K{color:#f87171}.QuizModal-module__quizResultMsg___sbe53.QuizModal-module__pending___BSkGy{color:var(--muted);font-family:Crimson Text,serif;font-style:italic}.QuizModal-module__quizBtn___wS01e{background:none;border:1px solid;cursor:pointer;font-family:Cinzel,serif;font-size:.78rem;letter-spacing:.08em;padding:.6rem 1.4rem;transition:all .2s;white-space:nowrap}.QuizModal-module__quizBtnClose___XCfWa{border-color:var(--border2);color:var(--muted)}.QuizModal-module__quizBtnClose___XCfWa:hover{border-color:var(--muted);color:var(--text)}.QuizModal-module__quizBtnComplete___btrXC{background:var(--sage);border-color:var(--sage);color:var(--bg);display:none}.QuizModal-module__quizBtnComplete___btrXC:hover{background:#22c55e;border-color:#22c55e}.QuizModal-module__quizBtnComplete___btrXC.QuizModal-module__show___bepDj{display:block}.QuizModal-module__quizBtnRetry___vRmDh{border-color:#fbbf2466;color:var(--ember2);display:none}.QuizModal-module__quizBtnRetry___vRmDh:hover{background:#fbbf2414}.QuizModal-module__quizBtnRetry___vRmDh.QuizModal-module__show___bepDj{display:block}";
var styles$2 = {"quizBackdrop":"QuizModal-module__quizBackdrop___ARu85","active":"QuizModal-module__active___CdCfB","quizModal":"QuizModal-module__quizModal___LRjF1","quizHeader":"QuizModal-module__quizHeader___hPRnV","quizQuestTitle":"QuizModal-module__quizQuestTitle___9iMR9","quizMetaRow":"QuizModal-module__quizMetaRow___2FeGr","quizTierBadges":"QuizModal-module__quizTierBadges___tuad8","tierBadge":"QuizModal-module__tierBadge___keUHq","beginner":"QuizModal-module__beginner___Vnolt","intermediate":"QuizModal-module__intermediate___hJ-B-","advanced":"QuizModal-module__advanced___6WcGV","quizScoreDisplay":"QuizModal-module__quizScoreDisplay___tWwMI","quizProgressBar":"QuizModal-module__quizProgressBar___1VsAX","quizProgressFill":"QuizModal-module__quizProgressFill___2ZASw","quizLoading":"QuizModal-module__quizLoading___Y14cI","quizLoadingIcon":"QuizModal-module__quizLoadingIcon___62HyT","spin":"QuizModal-module__spin___5mLlQ","quizLoadingText":"QuizModal-module__quizLoadingText___rZ1m4","quizLoadingSub":"QuizModal-module__quizLoadingSub___JbDRs","quizQuestions":"QuizModal-module__quizQuestions___LBUPl","quizBody":"QuizModal-module__quizBody___oDieI","questionBlock":"QuizModal-module__questionBlock___TQo1n","visible":"QuizModal-module__visible___KmdOV","correct":"QuizModal-module__correct___-F1i5","wrong":"QuizModal-module__wrong___m1gIk","qTierLabel":"QuizModal-module__qTierLabel___EnyDT","qNumber":"QuizModal-module__qNumber___pnfyC","qText":"QuizModal-module__qText___Xq01D","qOptions":"QuizModal-module__qOptions___-jL4f","qOption":"QuizModal-module__qOption___qpozn","disabled":"QuizModal-module__disabled___cDaZS","selected":"QuizModal-module__selected___cYxa8","correctAns":"QuizModal-module__correctAns___bLi5f","wrongAns":"QuizModal-module__wrongAns___hd7qR","qOptKey":"QuizModal-module__qOptKey___JOlRX","qExplanation":"QuizModal-module__qExplanation___Pavzx","show":"QuizModal-module__show___bepDj","correctExp":"QuizModal-module__correctExp___LUZNz","wrongExp":"QuizModal-module__wrongExp___fq-Oj","quizFooter":"QuizModal-module__quizFooter___zIhvF","quizResultMsg":"QuizModal-module__quizResultMsg___sbe53","pass":"QuizModal-module__pass___FayDE","fail":"QuizModal-module__fail___Nle-K","pending":"QuizModal-module__pending___BSkGy","quizBtn":"QuizModal-module__quizBtn___wS01e","quizBtnClose":"QuizModal-module__quizBtnClose___XCfWa","quizBtnComplete":"QuizModal-module__quizBtnComplete___btrXC","quizBtnRetry":"QuizModal-module__quizBtnRetry___vRmDh"};
styleInject(css_248z$2);

const QuizModal = ({
  questId,
  onClose,
  onComplete
}) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState({});
  const [error, setError] = useState(null);
  const [quizData, setQuizData] = useState(null);
  const quest = ACTS.flatMap(a => a.quests).find(q => q.id === questId);
  useEffect(() => {
    loadQuizData();
  }, []);
  const loadQuestions = useCallback(() => {
    if (!quizData) return;
    setLoading(true);
    setError(null);
    setSubmitted({});
    try {
      // Load questions from JSON file
      if (quizData[questId] && quizData[questId].questions) {
        setQuestions(quizData[questId].questions);
        setLoading(false);
      } else {
        setError(`Questions not found for quest "${questId}". Please ensure quiz_game_data.json contains data for this quest.`);
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [quizData, questId]);
  useEffect(() => {
    if (quizData) {
      loadQuestions();
    }
  }, [questId, quizData, loadQuestions]);
  const loadQuizData = async () => {
    try {
      const response = await fetch('/quiz_game_data.json');
      if (!response.ok) {
        throw new Error('Failed to load quiz data');
      }
      const data = await response.json();
      setQuizData(data);
    } catch (err) {
      console.error('Error loading quiz data:', err);
      setError('Failed to load quiz data. Please ensure quiz_game_data.json is in the public folder.');
      setLoading(false);
    }
  };
  const selectOption = (qIdx, optIdx) => {
    if (submitted[qIdx] !== undefined) return; // already answered

    setSubmitted(prev => ({
      ...prev,
      [qIdx]: optIdx
    }));
  };
  const getTierCounts = () => {
    const counts = {
      beginner: 0,
      intermediate: 0,
      advanced: 0
    };
    questions.forEach(question => {
      const tier = question.tier || 'beginner';
      if (counts[tier] !== undefined) {
        counts[tier]++;
      }
    });
    return counts;
  };
  const getScore = () => {
    const total = questions.length;
    const correct = Object.entries(submitted).filter(([idx, ans]) => {
      return ans === questions[parseInt(idx)].correct;
    }).length;
    return {
      correct,
      total
    };
  };
  const getProgress = () => {
    const total = questions.length;
    if (total === 0) return 0;
    const answered = Object.keys(submitted).length;
    return answered / total * 100;
  };
  const canComplete = () => {
    const {
      correct,
      total
    } = getScore();
    // Require 16 out of 20 questions correct (80%)
    const requiredCorrect = 16;
    return Object.keys(submitted).length === total && correct >= requiredCorrect;
  };
  const handleRetry = () => {
    setSubmitted({});
    loadQuestions();
  };
  const handleComplete = () => {
    if (canComplete()) {
      onComplete();
    }
  };
  const {
    correct,
    total
  } = getScore();
  const allAnswered = Object.keys(submitted).length === total;
  const passed = canComplete();
  const tierCounts = getTierCounts();

  // Modal should always be visible when questId is provided
  return /*#__PURE__*/React.createElement("div", {
    className: `${styles$2.quizBackdrop} ${styles$2.active}`,
    onClick: e => e.target === e.currentTarget && onClose()
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$2.quizModal
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$2.quizHeader
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$2.quizQuestTitle
  }, quest ? quest.title : 'Loading...'), /*#__PURE__*/React.createElement("div", {
    className: styles$2.quizMetaRow
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$2.quizTierBadges
  }, tierCounts.beginner > 0 && /*#__PURE__*/React.createElement("span", {
    className: `${styles$2.tierBadge} ${styles$2.beginner}`
  }, tierCounts.beginner, " BEGINNER"), tierCounts.intermediate > 0 && /*#__PURE__*/React.createElement("span", {
    className: `${styles$2.tierBadge} ${styles$2.intermediate}`
  }, tierCounts.intermediate, " INTERMEDIATE"), tierCounts.advanced > 0 && /*#__PURE__*/React.createElement("span", {
    className: `${styles$2.tierBadge} ${styles$2.advanced}`
  }, tierCounts.advanced, " ADVANCED")), /*#__PURE__*/React.createElement("div", {
    className: styles$2.quizScoreDisplay
  }, correct, " / ", total || 0)), /*#__PURE__*/React.createElement("div", {
    className: styles$2.quizProgressBar
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$2.quizProgressFill,
    style: {
      width: `${getProgress()}%`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: styles$2.quizBody
  }, loading && /*#__PURE__*/React.createElement("div", {
    className: styles$2.quizLoading
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$2.quizLoadingIcon
  }, "\u2699\uFE0F"), /*#__PURE__*/React.createElement("div", {
    className: styles$2.quizLoadingText
  }, "The Oracle is forging your trial..."), /*#__PURE__*/React.createElement("div", {
    className: styles$2.quizLoadingSub
  }, "LOADING QUESTIONS")), error && /*#__PURE__*/React.createElement("div", {
    className: styles$2.quizLoading
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$2.quizLoadingIcon
  }, "\u26A0\uFE0F"), /*#__PURE__*/React.createElement("div", {
    className: styles$2.quizLoadingText
  }, "The Oracle's connection was severed."), /*#__PURE__*/React.createElement("div", {
    className: styles$2.quizLoadingSub
  }, error)), !loading && !error && questions.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: styles$2.quizQuestions
  }, questions.map((q, idx) => {
    const tier = q.tier || 'beginner';
    const isAnswered = submitted[idx] !== undefined;
    const isCorrect = isAnswered && submitted[idx] === q.correct;
    const optLabels = ['A', 'B', 'C', 'D'];
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: `${styles$2.questionBlock} ${isAnswered ? isCorrect ? styles$2.correct : styles$2.wrong : ''} ${styles$2.visible}`
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: `${styles$2.qTierLabel} ${styles$2[tier]}`
    }, tier.toUpperCase()), /*#__PURE__*/React.createElement("span", {
      className: styles$2.qNumber
    }, "#", idx + 1)), /*#__PURE__*/React.createElement("div", {
      className: styles$2.qText
    }, q.question), /*#__PURE__*/React.createElement("div", {
      className: styles$2.qOptions
    }, q.options.map((opt, oi) => {
      const isSelected = submitted[idx] === oi;
      const isCorrectOption = oi === q.correct;
      const showCorrect = isAnswered;
      return /*#__PURE__*/React.createElement("div", {
        key: oi,
        className: `${styles$2.qOption} ${isSelected ? styles$2.selected : ''} ${showCorrect && isCorrectOption ? styles$2.correctAns : ''} ${showCorrect && isSelected && !isCorrect ? styles$2.wrongAns : ''} ${isAnswered ? styles$2.disabled : ''}`,
        onClick: () => selectOption(idx, oi)
      }, /*#__PURE__*/React.createElement("span", {
        className: styles$2.qOptKey
      }, optLabels[oi]), /*#__PURE__*/React.createElement("span", null, opt));
    })), isAnswered && /*#__PURE__*/React.createElement("div", {
      className: `${styles$2.qExplanation} ${styles$2.show} ${isCorrect ? styles$2.correctExp : styles$2.wrongExp}`
    }, q.explanation));
  }))), !loading && /*#__PURE__*/React.createElement("div", {
    className: styles$2.quizFooter
  }, /*#__PURE__*/React.createElement("div", {
    className: `${styles$2.quizResultMsg} ${allAnswered ? passed ? styles$2.pass : styles$2.fail : styles$2.pending}`
  }, allAnswered ? passed ? `⚔️ TRIAL COMPLETE — ${correct}/${total} correct (16+ required). You may claim your XP.` : `✕ TRIAL FAILED — ${correct}/${total} correct. You need at least 16 correct answers to pass.` : `Answer all ${total} questions to complete the trial. Need 16+ correct to pass.`), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.6rem',
      flexWrap: 'wrap'
    }
  }, !passed && allAnswered && /*#__PURE__*/React.createElement("button", {
    className: `${styles$2.quizBtn} ${styles$2.quizBtnRetry} ${styles$2.show}`,
    onClick: handleRetry
  }, "\u21BA Retry"), passed && /*#__PURE__*/React.createElement("button", {
    className: `${styles$2.quizBtn} ${styles$2.quizBtnComplete} ${styles$2.show}`,
    onClick: handleComplete
  }, "\u2694\uFE0F Mark Complete"), /*#__PURE__*/React.createElement("button", {
    className: `${styles$2.quizBtn} ${styles$2.quizBtnClose}`,
    onClick: onClose
  }, "\u2715 Close")))));
};

var css_248z$1 = ":root{--surface2:#221c14;--ember:#f97316;--ember2:#fbbf24}.Toast-module__toast___czpzb{background:var(--surface2);border:1px solid var(--ember);bottom:2rem;box-shadow:0 0 40px #f973164d;color:var(--ember2);font-family:Cinzel,serif;font-size:.85rem;left:50%;padding:.75rem 1.5rem;pointer-events:none;position:fixed;transform:translateX(-50%) translateY(100px);transition:transform .4s cubic-bezier(.22,1,.36,1);white-space:nowrap;z-index:10000}.Toast-module__toast___czpzb.Toast-module__show___VkLkl{transform:translateX(-50%) translateY(0)}";
var styles$1 = {"toast":"Toast-module__toast___czpzb","show":"Toast-module__show___VkLkl"};
styleInject(css_248z$1);

const Toast = ({
  message
}) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (message) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 3500);
      return () => clearTimeout(timer);
    }
  }, [message]);
  if (!message) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: `${styles$1.toast} ${show ? styles$1.show : ''}`
  }, message);
};

const STORAGE_KEY = 'k8s_rpg_v3';
const useGameState = () => {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {
        quests: {},
        achievements: {}
      };
    } catch {
      return {
        quests: {},
        achievements: {}
      };
    }
  });
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);
  const saveState = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  };
  const markQuestDone = (questId, done) => {
    setState(prev => ({
      ...prev,
      quests: {
        ...prev.quests,
        [questId]: done
      }
    }));
  };
  const toggleAchievement = achievementId => {
    setState(prev => ({
      ...prev,
      achievements: {
        ...prev.achievements,
        [achievementId]: !prev.achievements[achievementId]
      }
    }));
  };
  const unlockAchievement = achievementId => {
    setState(prev => {
      if (prev.achievements[achievementId]) return prev;
      return {
        ...prev,
        achievements: {
          ...prev.achievements,
          [achievementId]: true
        }
      };
    });
  };
  return {
    state,
    saveState,
    markQuestDone,
    toggleAchievement,
    unlockAchievement
  };
};

var css_248z = ":root{--bg:#0d0a06;--bg2:#13100a;--surface:#1a1510;--surface2:#221c14;--border:#3d3020;--border2:#5a4530;--ember:#f97316;--ember2:#fbbf24;--ember3:#fde68a;--blood:#dc2626;--sage:#4ade80;--ice:#67e8f9;--violet:#a78bfa;--text:#e8d5b0;--muted:#8a7055;--dim:#5a4535}.K8sQuizGame-module__app___nwQir{background:var(--bg);color:var(--text);font-family:Crimson Text,Georgia,serif;font-size:17px;line-height:1.6;min-height:100vh;overflow-x:hidden;position:relative}.K8sQuizGame-module__app___nwQir:before{background:repeating-linear-gradient(0deg,#0000,#0000 2px,#00000008 0,#00000008 4px);content:\"\";inset:0;pointer-events:none;position:fixed;z-index:9999}.K8sQuizGame-module__sparks___7f2vY{inset:0;overflow:hidden;pointer-events:none;position:fixed;z-index:1}.K8sQuizGame-module__levelupOverlay___mt4yW{animation:K8sQuizGame-module__levelFlash___6IQo6 1.5s ease forwards;background:#f9731626;inset:0;pointer-events:none;position:fixed;z-index:9998}@keyframes K8sQuizGame-module__levelFlash___6IQo6{0%{opacity:0}20%{opacity:1}80%{opacity:1}to{opacity:0}}.K8sQuizGame-module__hero___r-3ex{background:radial-gradient(ellipse at 50% 100%,#f973161f 0,#0000 70%);border-bottom:1px solid var(--border);overflow:hidden;padding:5rem 2rem 4rem;position:relative;text-align:center}.K8sQuizGame-module__hero___r-3ex:after{background:linear-gradient(90deg,#0000,var(--ember),var(--ember2),var(--ember),#0000);bottom:0;content:\"\";height:1px;left:0;position:absolute;right:0}.K8sQuizGame-module__container___BJhyA{margin:0 auto;max-width:900px;padding:0 1.5rem;position:relative;z-index:2}.K8sQuizGame-module__runeBorder___4w9Yu{color:var(--ember);display:inline-block;font-family:Share Tech Mono,monospace;font-size:.65rem;letter-spacing:.4em;margin-bottom:1.5rem;opacity:.6}.K8sQuizGame-module__hero___r-3ex h1{-webkit-text-fill-color:#0000;background:linear-gradient(180deg,var(--ember3) 0,var(--ember) 60%,#c2410c 100%);-webkit-background-clip:text;background-clip:text;filter:drop-shadow(0 0 30px rgba(249,115,22,.4));font-family:Cinzel,serif;font-size:clamp(2.2rem,6vw,4.5rem);font-weight:900;line-height:1;margin-bottom:.5rem}.K8sQuizGame-module__heroSubtitle___9hqpb{color:var(--muted);font-size:1rem;font-style:italic;margin-bottom:2.5rem}.K8sQuizGame-module__ornament___wP-cq{color:var(--dim);font-size:.8rem;letter-spacing:.5em;padding:2rem 0 1rem;text-align:center}.K8sQuizGame-module__footer___xh0Lp{background:radial-gradient(ellipse at 50% 100%,#f973160d 0,#0000 70%);border-top:1px solid var(--border);color:var(--dim);font-size:.8rem;font-style:italic;padding:2rem 1rem 3rem;text-align:center}";
var styles = {"app":"K8sQuizGame-module__app___nwQir","sparks":"K8sQuizGame-module__sparks___7f2vY","levelupOverlay":"K8sQuizGame-module__levelupOverlay___mt4yW","hero":"K8sQuizGame-module__hero___r-3ex","container":"K8sQuizGame-module__container___BJhyA","runeBorder":"K8sQuizGame-module__runeBorder___4w9Yu","heroSubtitle":"K8sQuizGame-module__heroSubtitle___9hqpb","ornament":"K8sQuizGame-module__ornament___wP-cq","footer":"K8sQuizGame-module__footer___xh0Lp"};
styleInject(css_248z);

const K8sQuizGame = () => {
  const {
    state,
    markQuestDone,
    toggleAchievement,
    unlockAchievement
  } = useGameState();
  const [toast, setToast] = useState(null);
  const [quizQuestId, setQuizQuestId] = useState(null);
  const [levelUpFlash, setLevelUpFlash] = useState(false);
  const totalXP = useMemo(() => {
    let xp = 0;
    ACTS.forEach(act => act.quests.forEach(q => {
      if (state.quests[q.id]) xp += q.xp;
    }));
    return xp;
  }, [state.quests]);
  const currentLevel = useMemo(() => {
    let lv = LEVELS[0];
    for (const l of LEVELS) {
      if (totalXP >= l.xp) lv = l;
    }
    return lv;
  }, [totalXP]);
  const showToast = message => {
    setToast(message);
    setTimeout(() => setToast(null), 3500);
  };
  const handleQuestClick = questId => {
    const quest = ACTS.flatMap(a => a.quests).find(q => q.id === questId);
    if (!quest) return;

    // If already done, clicking un-does it
    if (state.quests[questId]) {
      markQuestDone(questId, false);
      return;
    }

    // Otherwise open quiz
    setQuizQuestId(questId);
  };
  const handleQuestComplete = questId => {
    const prevLevel = currentLevel.lv;
    const quest = ACTS.flatMap(a => a.quests).find(q => q.id === questId);
    markQuestDone(questId, true);
    if (quest) {
      showToast(`⚔️ Quest complete! +${quest.xp} XP`);
    }

    // Check for level up after state updates
    setTimeout(() => {
      const newXp = totalXP + (quest?.xp || 0);
      let newLv = LEVELS[0];
      for (const l of LEVELS) {
        if (newXp >= l.xp) newLv = l;
      }
      if (newLv.lv > prevLevel) {
        showToast(`⚔️ LEVEL UP! You are now Level ${newLv.lv} — ${newLv.title}`);
        setLevelUpFlash(true);
        setTimeout(() => setLevelUpFlash(false), 1500);
      }
      if (newXp >= 1000) unlockAchievement('warlord');
    }, 100);

    // Check for achievements
    const questsDone = Object.values(state.quests).filter(Boolean).length + 1;
    if (questsDone === 1) unlockAchievement('first-blood');

    // Check act completions
    const actIds = ['act1-done', 'act2-done', 'act3-done'];
    ACTS.forEach((act, i) => {
      const allDone = act.quests.every(q => {
        if (q.id === questId) return true;
        return state.quests[q.id];
      });
      if (allDone && actIds[i]) {
        unlockAchievement(actIds[i]);
      }
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: styles.app
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.sparks,
    id: "sparks"
  }), levelUpFlash && /*#__PURE__*/React.createElement("div", {
    className: styles.levelupOverlay
  }), toast && /*#__PURE__*/React.createElement(Toast, {
    message: toast
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.hero
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.container
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.runeBorder
  }, "\u27E8 KUBERNETES CHRONICLES \u27E9"), /*#__PURE__*/React.createElement("h1", null, "Cluster Warlord"), /*#__PURE__*/React.createElement("p", {
    className: styles.heroSubtitle
  }, "A Backend Engineer's Journey from Apprentice to Master of the Control Plane"))), /*#__PURE__*/React.createElement(CharacterSheet, {
    state: state,
    totalXP: totalXP,
    currentLevel: currentLevel
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.ornament
  }, "\u2014 \u2694 \u2014"), /*#__PURE__*/React.createElement(ActsContainer, {
    state: state,
    onQuestClick: handleQuestClick
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.ornament
  }, "\u2014 \u2694 \u2014"), /*#__PURE__*/React.createElement(AchievementsGrid, {
    state: state,
    onToggle: toggleAchievement
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.ornament
  }, "\u2014 \u2694 \u2014"), /*#__PURE__*/React.createElement(Spellbook, null), /*#__PURE__*/React.createElement("footer", {
    className: styles.footer
  }, "\u2694\uFE0F May your pods stay Running and your pipelines stay green."), quizQuestId && /*#__PURE__*/React.createElement(QuizModal, {
    questId: quizQuestId,
    onClose: () => setQuizQuestId(null),
    onComplete: () => {
      handleQuestComplete(quizQuestId);
      setQuizQuestId(null);
    }
  }));
};

export { ACHIEVEMENTS, ACTS, K8sQuizGame, LEVELS, SPELLS, K8sQuizGame as default, useGameState };
//# sourceMappingURL=index.esm.js.map
