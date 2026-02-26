'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

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

var css_248z$6 = ".CharacterSheet-module__charSheet___rHsP-{animation:CharacterSheet-module__fadeIn___LE9LW .4s ease backwards;background:var(--surface);border:1px solid var(--border2);margin:3rem auto;max-width:900px;padding:0 1.5rem;position:relative}.CharacterSheet-module__charSheet___rHsP-:after,.CharacterSheet-module__charSheet___rHsP-:before{background:var(--bg);color:var(--ember);content:\"◆\";font-size:1rem;padding:0 .5rem;position:absolute;top:-.6rem}.CharacterSheet-module__charSheet___rHsP-:before{left:2rem}.CharacterSheet-module__charSheet___rHsP-:after{right:2rem}.CharacterSheet-module__sectionTitle___TfhZa{border-bottom:1px solid var(--border);color:var(--ember);font-family:Cinzel,serif;font-size:.7rem;letter-spacing:.25em;margin-bottom:1.5rem;padding:1.2rem 0 1rem;text-transform:uppercase}.CharacterSheet-module__charGrid___o-yKD{display:grid;gap:1.5rem;grid-template-columns:1fr 1fr;padding-bottom:1.5rem}@media (max-width:600px){.CharacterSheet-module__charGrid___o-yKD{grid-template-columns:1fr}}.CharacterSheet-module__charStat___h8d7Q{display:flex;flex-direction:column;gap:.2rem}.CharacterSheet-module__statLabel___0tOMn{color:var(--muted);font-family:Share Tech Mono,monospace;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase}.CharacterSheet-module__statValue___uyG--{color:var(--ember2);font-family:Cinzel,serif;font-size:1.1rem}.CharacterSheet-module__xpSection___iT36l{border-top:1px solid var(--border);padding:1.5rem 0}.CharacterSheet-module__xpHeader___u95qq{align-items:baseline;display:flex;justify-content:space-between;margin-bottom:.6rem}.CharacterSheet-module__xpLabel___hODiz{color:var(--muted);font-family:Share Tech Mono,monospace;font-size:.65rem;letter-spacing:.15em}.CharacterSheet-module__xpNumbers___RuFGn{color:var(--ember2);font-family:Share Tech Mono,monospace;font-size:.85rem}.CharacterSheet-module__xpTrack___6Ouax{background:var(--bg);border:1px solid var(--border2);border-radius:1px;height:10px;overflow:hidden}.CharacterSheet-module__xpFill___PczbG{background:linear-gradient(90deg,var(--ember-dark),var(--ember),var(--ember2));height:100%;position:relative;transition:width .8s cubic-bezier(.22,1,.36,1)}.CharacterSheet-module__xpFill___PczbG:after{background:#fff;bottom:0;content:\"\";filter:blur(2px);opacity:.6;position:absolute;right:0;top:0;width:4px}.CharacterSheet-module__levelDisplay___Js4RX{align-items:center;display:flex;gap:1.5rem;margin-top:1rem}.CharacterSheet-module__levelBadge___ME92c{align-items:center;background:var(--surface2);border:2px solid var(--ember);display:flex;flex-direction:column;flex-shrink:0;height:64px;justify-content:center;position:relative;width:64px}.CharacterSheet-module__levelBadge___ME92c:after,.CharacterSheet-module__levelBadge___ME92c:before{border:1px solid var(--ember2);content:\"\";height:8px;position:absolute;width:8px}.CharacterSheet-module__levelBadge___ME92c:before{border-bottom:none;border-right:none;left:-4px;top:-4px}.CharacterSheet-module__levelBadge___ME92c:after{border-left:none;border-top:none;bottom:-4px;right:-4px}.CharacterSheet-module__levelNum___1ld5k{color:var(--ember2);font-family:Cinzel,serif;font-size:1.8rem;font-weight:900;line-height:1}.CharacterSheet-module__levelWord___VddZS{color:var(--muted);font-family:Share Tech Mono,monospace;font-size:.5rem;letter-spacing:.1em}.CharacterSheet-module__levelTitleDisplay___ivEER{flex:1}.CharacterSheet-module__currentTitle___6M7Pm{color:var(--ember2);display:block;font-family:Cinzel,serif;font-size:1.3rem}.CharacterSheet-module__nextLevelHint___3ptRx{color:var(--muted);font-size:.82rem;font-style:italic;margin-top:.2rem}.CharacterSheet-module__abilitiesGrid___t7Jmt{display:flex;flex-direction:column;gap:.6rem;padding-bottom:1.5rem}.CharacterSheet-module__ability___kVg4J{align-items:center;background:var(--bg2);border:1px solid var(--border);display:flex;gap:1rem;overflow:hidden;padding:.8rem 1rem;position:relative;transition:all .2s}.CharacterSheet-module__ability___kVg4J.CharacterSheet-module__locked___RsPeF{opacity:.4}.CharacterSheet-module__ability___kVg4J.CharacterSheet-module__unlocked___mY-cT{background:rgba(var(--ember-rgb),.05);border-color:rgba(var(--ember-rgb),.4)}.CharacterSheet-module__ability___kVg4J.CharacterSheet-module__unlocked___mY-cT:before{background:linear-gradient(180deg,var(--ember2),var(--ember));bottom:0;content:\"\";left:0;position:absolute;top:0;width:3px}.CharacterSheet-module__abilityIcon___rz6n9{flex-shrink:0;font-size:1.3rem;text-align:center;width:2rem}.CharacterSheet-module__abilityInfo___Goh5y{flex:1}.CharacterSheet-module__abilityName___gMnd7{color:var(--ember3);display:block;font-family:Cinzel,serif;font-size:.9rem;margin-bottom:.1rem}.CharacterSheet-module__ability___kVg4J.CharacterSheet-module__locked___RsPeF .CharacterSheet-module__abilityName___gMnd7{color:var(--muted)}.CharacterSheet-module__abilityDesc___88H9f{color:var(--muted);font-size:.82rem;font-style:italic}.CharacterSheet-module__abilityLevel___7OHW1{color:var(--dim);font-family:Share Tech Mono,monospace;font-size:.6rem;letter-spacing:.1em}@keyframes CharacterSheet-module__fadeIn___LE9LW{0%{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}";
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

var css_248z$5 = ".ActsContainer-module__acts___-2jhN{margin:0 auto 3rem;max-width:900px;padding:0 1.5rem}.ActsContainer-module__actCard___sFCzt{animation:ActsContainer-module__fadeIn___OtlqY .4s ease backwards;background:var(--surface);border:1px solid var(--border);margin-bottom:1.5rem;overflow:hidden;position:relative}.ActsContainer-module__actCard___sFCzt:before{bottom:0;content:\"\";left:0;position:absolute;top:0;width:3px}.ActsContainer-module__actI___in-XN:before{background:linear-gradient(180deg,var(--ice),var(--violet))}.ActsContainer-module__actII___qR0tX:before{background:linear-gradient(180deg,var(--violet),var(--blood))}.ActsContainer-module__actIII___89KBy:before{background:linear-gradient(180deg,var(--ember),var(--ember2))}.ActsContainer-module__actIV___e-SBR:before{background:linear-gradient(180deg,var(--ember2),var(--sage))}.ActsContainer-module__actHeader___-IzPh{align-items:center;cursor:pointer;display:flex;gap:1rem;padding:1.2rem 1.5rem;user-select:none}.ActsContainer-module__actHeader___-IzPh:hover{background:#ffffff05}.ActsContainer-module__actRoman___OmBbk{color:var(--ember);flex-shrink:0;font-family:Cinzel,serif;font-size:1.4rem;font-weight:900;text-shadow:0 0 20px rgba(var(--ember-rgb),.5);width:2rem}.ActsContainer-module__actInfo___K1Swz{flex:1}.ActsContainer-module__actName___Jvr5H{color:var(--text);display:block;font-family:Cinzel,serif;font-size:1rem;font-weight:700}.ActsContainer-module__actSubtitle___7hgND{color:var(--muted);font-size:.82rem;font-style:italic}.ActsContainer-module__actXpBadge___ktlTA{border:1px solid rgba(var(--ember2-rgb),.3);color:var(--ember2);font-family:Share Tech Mono,monospace;font-size:.65rem;letter-spacing:.1em;padding:.2rem .6rem;white-space:nowrap}.ActsContainer-module__actProgressRing___-l0qW{flex-shrink:0;height:40px;position:relative;width:40px}.ActsContainer-module__actProgressRing___-l0qW svg{transform:rotate(-90deg)}.ActsContainer-module__ringBg___PwBu-{fill:none;stroke:var(--border2);stroke-width:3}.ActsContainer-module__ringFill___jE1E2{fill:none;stroke:var(--ember);stroke-width:3;stroke-linecap:round;transition:stroke-dashoffset .6s ease}.ActsContainer-module__ringText___g-fyW{align-items:center;color:var(--muted);display:flex;font-family:Share Tech Mono,monospace;font-size:.6rem;inset:0;justify-content:center;position:absolute}.ActsContainer-module__actArrow___mUdBE{color:var(--dim);font-size:.7rem;transition:transform .2s}.ActsContainer-module__actArrow___mUdBE.ActsContainer-module__open___81kEh{transform:rotate(90deg)}.ActsContainer-module__actBody___owvV9{border-top:1px solid var(--border)}.ActsContainer-module__actLore___1Sgae{background:var(--bg2);border-bottom:1px solid var(--border);color:var(--muted);font-size:.88rem;font-style:italic;line-height:1.7;padding:1rem 1.5rem}.ActsContainer-module__actLore___1Sgae:before{color:var(--ember);content:'\" ';font-size:1.2rem}.ActsContainer-module__actLore___1Sgae:after{color:var(--ember);content:' \"';font-size:1.2rem}.ActsContainer-module__quests___dOe1j{display:flex;flex-direction:column;gap:.5rem;padding:1rem 1.5rem}.ActsContainer-module__quest___UIJa9{align-items:flex-start;border:1px solid #0000;cursor:pointer;display:flex;gap:1rem;padding:.75rem 1rem;position:relative;transition:all .15s}.ActsContainer-module__quest___UIJa9:hover{background:#ffffff05;border-color:var(--border)}.ActsContainer-module__quest___UIJa9.ActsContainer-module__boss___-krM-{background:rgba(var(--blood-rgb),.04);border-color:rgba(var(--blood-rgb),.2);margin-top:.5rem}.ActsContainer-module__quest___UIJa9.ActsContainer-module__boss___-krM-:hover{background:rgba(var(--blood-rgb),.08);border-color:rgba(var(--blood-rgb),.5)}.ActsContainer-module__quest___UIJa9.ActsContainer-module__done___FjKwJ{opacity:.45}.ActsContainer-module__quest___UIJa9.ActsContainer-module__done___FjKwJ .ActsContainer-module__questTitle___O-hvz{text-decoration:line-through}.ActsContainer-module__questCheckbox___UXgP3{align-items:center;border:1.5px solid var(--border2);display:flex;flex-shrink:0;font-size:.7rem;height:18px;justify-content:center;margin-top:2px;transition:all .2s;width:18px}.ActsContainer-module__quest___UIJa9.ActsContainer-module__boss___-krM- .ActsContainer-module__questCheckbox___UXgP3{border-color:rgba(var(--blood-rgb),.5)}.ActsContainer-module__quest___UIJa9.ActsContainer-module__done___FjKwJ .ActsContainer-module__questCheckbox___UXgP3{background:var(--sage);border-color:var(--sage);color:#000}.ActsContainer-module__questContent___KB81-{flex:1}.ActsContainer-module__questTitle___O-hvz{color:var(--text);font-size:.92rem;line-height:1.4}.ActsContainer-module__quest___UIJa9.ActsContainer-module__boss___-krM- .ActsContainer-module__questTitle___O-hvz{color:var(--blood-pale)}.ActsContainer-module__questMeta___rdjW5{align-items:center;display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.3rem}.ActsContainer-module__qTag___6ezAx{border-radius:1px;font-family:Share Tech Mono,monospace;font-size:.6rem;letter-spacing:.05em;padding:.1rem .4rem}.ActsContainer-module__qTool___5aYsp{background:rgba(var(--ice-rgb),.08);border:1px solid rgba(var(--ice-rgb),.15);color:var(--ice)}.ActsContainer-module__qTime___rK97Z{background:#ffffff0a;border:1px solid var(--border);color:var(--muted)}.ActsContainer-module__qXp___EN6zt{background:rgba(var(--ember2-rgb),.08);border:1px solid rgba(var(--ember2-rgb),.2);color:var(--ember2)}.ActsContainer-module__qBoss___4H0yr{background:rgba(var(--blood-rgb),.08);border:1px solid rgba(var(--blood-rgb),.3);color:var(--blood-pale)}.ActsContainer-module__bossSkull___GByRr{font-size:1rem;margin-right:.25rem}.ActsContainer-module__actReward___hqMUv{align-items:center;background:rgba(var(--ember-rgb),.04);border-top:1px solid var(--border);display:flex;gap:1rem;padding:1rem 1.5rem}.ActsContainer-module__rewardIcon___J2UUw{font-size:1.4rem}.ActsContainer-module__rewardText___WiT9M{flex:1;font-size:.85rem}.ActsContainer-module__rewardTitle___WD0OH{color:var(--ember2);display:block;font-family:Cinzel,serif;font-size:.8rem;margin-bottom:.1rem}.ActsContainer-module__rewardDesc___lS92n{color:var(--muted);font-size:.82rem;font-style:italic}@keyframes ActsContainer-module__fadeIn___OtlqY{0%{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}";
var styles$5 = {"acts":"ActsContainer-module__acts___-2jhN","actCard":"ActsContainer-module__actCard___sFCzt","fadeIn":"ActsContainer-module__fadeIn___OtlqY","actI":"ActsContainer-module__actI___in-XN","actII":"ActsContainer-module__actII___qR0tX","actIII":"ActsContainer-module__actIII___89KBy","actIV":"ActsContainer-module__actIV___e-SBR","actHeader":"ActsContainer-module__actHeader___-IzPh","actRoman":"ActsContainer-module__actRoman___OmBbk","actInfo":"ActsContainer-module__actInfo___K1Swz","actName":"ActsContainer-module__actName___Jvr5H","actSubtitle":"ActsContainer-module__actSubtitle___7hgND","actXpBadge":"ActsContainer-module__actXpBadge___ktlTA","actProgressRing":"ActsContainer-module__actProgressRing___-l0qW","ringBg":"ActsContainer-module__ringBg___PwBu-","ringFill":"ActsContainer-module__ringFill___jE1E2","ringText":"ActsContainer-module__ringText___g-fyW","actArrow":"ActsContainer-module__actArrow___mUdBE","open":"ActsContainer-module__open___81kEh","actBody":"ActsContainer-module__actBody___owvV9","actLore":"ActsContainer-module__actLore___1Sgae","quests":"ActsContainer-module__quests___dOe1j","quest":"ActsContainer-module__quest___UIJa9","boss":"ActsContainer-module__boss___-krM-","done":"ActsContainer-module__done___FjKwJ","questTitle":"ActsContainer-module__questTitle___O-hvz","questCheckbox":"ActsContainer-module__questCheckbox___UXgP3","questContent":"ActsContainer-module__questContent___KB81-","questMeta":"ActsContainer-module__questMeta___rdjW5","qTag":"ActsContainer-module__qTag___6ezAx","qTool":"ActsContainer-module__qTool___5aYsp","qTime":"ActsContainer-module__qTime___rK97Z","qXp":"ActsContainer-module__qXp___EN6zt","qBoss":"ActsContainer-module__qBoss___4H0yr","bossSkull":"ActsContainer-module__bossSkull___GByRr","actReward":"ActsContainer-module__actReward___hqMUv","rewardIcon":"ActsContainer-module__rewardIcon___J2UUw","rewardText":"ActsContainer-module__rewardText___WiT9M","rewardTitle":"ActsContainer-module__rewardTitle___WD0OH","rewardDesc":"ActsContainer-module__rewardDesc___lS92n"};
styleInject(css_248z$5);

const ActsContainer = ({
  state,
  onQuestClick
}) => {
  const [openActs, setOpenActs] = React.useState({
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

var css_248z$4 = ".AchievementsGrid-module__achievementsGrid___xONZ3{display:grid;gap:.75rem;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));margin:0 auto;max-width:900px;padding-bottom:1.5rem;padding-left:1.5rem;padding-right:1.5rem}.AchievementsGrid-module__achievement___Eayj3{align-items:flex-start;animation:AchievementsGrid-module__fadeIn___N34c1 .4s ease backwards;background:var(--bg2);border:1px solid var(--border);cursor:pointer;display:flex;gap:.75rem;padding:.9rem 1rem;transition:all .2s}.AchievementsGrid-module__achievement___Eayj3:hover{border-color:var(--border2)}.AchievementsGrid-module__achievement___Eayj3.AchievementsGrid-module__earned___J44BS{background:rgba(var(--ember2-rgb),.05);border-color:rgba(var(--ember2-rgb),.35)}.AchievementsGrid-module__achIcon___pw6n9{filter:grayscale(1);flex-shrink:0;font-size:1.4rem;line-height:1;transition:filter .3s}.AchievementsGrid-module__achievement___Eayj3.AchievementsGrid-module__earned___J44BS .AchievementsGrid-module__achIcon___pw6n9{filter:none}.AchievementsGrid-module__achInfo___j2ims{flex:1}.AchievementsGrid-module__achName___KjALR{color:var(--muted);display:block;font-family:Cinzel,serif;font-size:.78rem;margin-bottom:.2rem;transition:color .2s}.AchievementsGrid-module__achievement___Eayj3.AchievementsGrid-module__earned___J44BS .AchievementsGrid-module__achName___KjALR{color:var(--ember2)}.AchievementsGrid-module__achDesc___hEm9S{color:var(--dim);font-size:.75rem;font-style:italic;line-height:1.3}@keyframes AchievementsGrid-module__fadeIn___N34c1{0%{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}";
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

var css_248z$3 = ".Spellbook-module__spellbook___oQGni{margin:0 auto 3rem;max-width:900px;padding:0 1.5rem}.Spellbook-module__charSheet___BoHKo{background:var(--surface);border:1px solid var(--border2);padding:0 1.5rem;position:relative}.Spellbook-module__charSheet___BoHKo:after,.Spellbook-module__charSheet___BoHKo:before{background:var(--bg);color:var(--ember);content:\"◆\";font-size:1rem;padding:0 .5rem;position:absolute;top:-.6rem}.Spellbook-module__charSheet___BoHKo:before{left:2rem}.Spellbook-module__charSheet___BoHKo:after{right:2rem}.Spellbook-module__sectionTitle___3VjMO{border-bottom:1px solid var(--border);color:var(--ember);font-family:Cinzel,serif;font-size:.7rem;letter-spacing:.25em;margin-bottom:1.5rem;padding:1.2rem 0 1rem;text-transform:uppercase}.Spellbook-module__spellGrid___QQ4i6{display:flex;flex-direction:column;gap:.4rem;padding-bottom:1.5rem}.Spellbook-module__spell___BHPX1{align-items:center;background:var(--bg2);border:1px solid var(--border);display:grid;gap:1rem;grid-template-columns:1fr 1fr;padding:.6rem .9rem}@media (max-width:600px){.Spellbook-module__spell___BHPX1{grid-template-columns:1fr}}.Spellbook-module__spellName___0WR5w{color:var(--text);font-size:.85rem}.Spellbook-module__spellCmd___SyeDp{background:rgba(var(--sage-rgb),.06);border:1px solid rgba(var(--sage-rgb),.15);color:var(--sage);cursor:pointer;font-family:Share Tech Mono,monospace;font-size:.72rem;overflow-x:auto;padding:.2rem .5rem;transition:all .15s;white-space:nowrap}.Spellbook-module__spellCmd___SyeDp:hover{background:rgba(var(--sage-rgb),.12);border-color:rgba(var(--sage-rgb),.3)}";
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

var quizDataJson = {
	"1-1": {
	title: "Control plane: API server, etcd, scheduler, controller manager",
	questions: [
		{
			tier: "beginner",
			question: "Which component in the Kubernetes control plane serves as the front-end and the only component that communicates directly with etcd?",
			options: [
				"kube-scheduler",
				"kube-apiserver",
				"kube-controller-manager",
				"kubelet"
			],
			correct: 1,
			explanation: "kube-apiserver is the central hub — all other components talk to it, and it is the only component that reads/writes to etcd."
		},
		{
			tier: "beginner",
			question: "What is etcd's primary role in a Kubernetes cluster?",
			options: [
				"Running containers on worker nodes",
				"Storing all cluster state and configuration as key-value data",
				"Scheduling pods to nodes",
				"Managing network routing between pods"
			],
			correct: 1,
			explanation: "etcd is a distributed key-value store that holds the entire state of the cluster — nodes, pods, configs, secrets, etc."
		},
		{
			tier: "beginner",
			question: "Which control plane component is responsible for assigning pods to nodes?",
			options: [
				"kube-apiserver",
				"etcd",
				"kube-scheduler",
				"kube-proxy"
			],
			correct: 2,
			explanation: "kube-scheduler watches for newly created pods with no assigned node and selects a suitable node based on resource availability and constraints."
		},
		{
			tier: "beginner",
			question: "The kube-controller-manager runs multiple controllers. Which of these is NOT one of them?",
			options: [
				"Node controller",
				"ReplicaSet controller",
				"CNI plugin controller",
				"Endpoints controller"
			],
			correct: 2,
			explanation: "CNI plugins are not controllers within kube-controller-manager. Node, ReplicaSet, and Endpoints controllers are all part of it."
		},
		{
			tier: "beginner",
			question: "On which nodes does the control plane typically run?",
			options: [
				"Worker nodes only",
				"All nodes",
				"Master/control-plane nodes",
				"The node with the most resources"
			],
			correct: 2,
			explanation: "Control plane components (API server, etcd, scheduler, controller-manager) run on dedicated master/control-plane nodes, separate from worker nodes."
		},
		{
			tier: "beginner",
			question: "What happens to a Kubernetes cluster if etcd becomes unavailable?",
			options: [
				"Running pods stop immediately",
				"New pods can still be scheduled but existing ones stop",
				"The cluster cannot make any state changes but running workloads continue",
				"Nothing, the cluster is fully independent of etcd"
			],
			correct: 2,
			explanation: "Existing pods keep running since kubelet manages them locally, but no new scheduling, updates, or API calls can complete without etcd."
		},
		{
			tier: "beginner",
			question: "Which command shows you the control plane component status?",
			options: [
				"kubectl get nodes",
				"kubectl get componentstatuses",
				"kubectl describe cluster",
				"kubectl get control-plane"
			],
			correct: 1,
			explanation: "kubectl get componentstatuses (or kubectl get cs) shows the health of scheduler, controller-manager, and etcd."
		},
		{
			tier: "intermediate",
			question: "When you run `kubectl apply -f deployment.yaml`, what is the correct order of events in the control plane?",
			options: [
				"scheduler → etcd → apiserver → controller-manager",
				"apiserver → etcd → controller-manager → scheduler",
				"etcd → apiserver → scheduler → controller-manager",
				"controller-manager → apiserver → etcd → scheduler"
			],
			correct: 1,
			explanation: "The request hits apiserver first, which validates and persists to etcd, then controller-manager detects the new desired state and creates pods, which scheduler then assigns to nodes."
		},
		{
			tier: "intermediate",
			question: "The kube-scheduler uses a two-phase process to place pods. What are the two phases?",
			options: [
				"Validate and Execute",
				"Filtering and Scoring",
				"Requesting and Binding",
				"Allocating and Scheduling"
			],
			correct: 1,
			explanation: "Filtering removes nodes that don't meet requirements (resources, taints, affinity), then Scoring ranks the remaining nodes to pick the best one."
		},
		{
			tier: "intermediate",
			question: "What is a 'watch' in the context of Kubernetes API server communication?",
			options: [
				"A health check endpoint",
				"A long-lived HTTP connection that streams resource change events",
				"A cron-based polling mechanism",
				"A webhook for external systems"
			],
			correct: 1,
			explanation: "Controllers and the scheduler use watches — long-lived HTTP connections where the apiserver pushes events when resources change, avoiding constant polling."
		},
		{
			tier: "intermediate",
			question: "What does the Node controller do when it loses contact with a node?",
			options: [
				"Immediately deletes all pods on that node",
				"Marks node as NotReady after 40s, then evicts pods after 5 minutes by default",
				"Restarts the node automatically",
				"Migrates all pods to other nodes within 10 seconds"
			],
			correct: 1,
			explanation: "The Node controller waits ~40s to mark NotReady, then after the pod-eviction-timeout (default 5m), it starts evicting pods to healthy nodes."
		},
		{
			tier: "intermediate",
			question: "Where are control plane components typically deployed in a kubeadm-provisioned cluster?",
			options: [
				"As system daemons (systemd services)",
				"As static pods defined in /etc/kubernetes/manifests/",
				"As DaemonSets on master nodes",
				"As regular Deployments in kube-system namespace"
			],
			correct: 1,
			explanation: "kubeadm deploys control plane components as static pods — manifests in /etc/kubernetes/manifests/ that kubelet watches and ensures are always running."
		},
		{
			tier: "intermediate",
			question: "What is the purpose of leader election among controller-manager and scheduler instances in an HA cluster?",
			options: [
				"Load balancing requests across replicas",
				"Ensuring only one instance actively makes decisions at a time to avoid conflicts",
				"Syncing state between replicas",
				"Determining which node gets priority for scheduling"
			],
			correct: 1,
			explanation: "Multiple replicas exist for HA, but only the leader actively reconciles state. Others are on standby and take over if the leader fails, preventing duplicate actions."
		},
		{
			tier: "intermediate",
			question: "Which etcd configuration option is critical for production clusters to prevent data loss?",
			options: [
				"--etcd-cache-size",
				"--auto-compaction-retention",
				"--data-dir pointing to persistent storage with regular snapshots",
				"--max-request-bytes"
			],
			correct: 2,
			explanation: "Persistent storage plus regular etcd snapshots (etcdctl snapshot save) is essential — losing etcd data means losing all cluster state."
		},
		{
			tier: "advanced",
			question: "What is the 'thundering herd' problem in the context of the Kubernetes API server, and how does it mitigate it?",
			options: [
				"Too many pods on one node; solved by resource limits",
				"All watchers reconnecting simultaneously after apiserver restart; mitigated by random jitter in client reconnect logic",
				"etcd compaction blocking writes; solved by rate limiting",
				"Scheduler overload; solved by priority queues"
			],
			correct: 1,
			explanation: "After an apiserver restart, all clients try to reconnect at once. Kubernetes client libraries add random jitter to reconnect timing to spread the load."
		},
		{
			tier: "advanced",
			question: "What is the Resource Version in Kubernetes API responses and why is it important for watches?",
			options: [
				"The API version of the resource (v1, v1beta1)",
				"A monotonically increasing etcd revision that clients use to resume watches without missing events",
				"The kubectl client version",
				"The schema version of the CRD"
			],
			correct: 1,
			explanation: "ResourceVersion maps to an etcd revision. Clients pass it when starting a watch so the apiserver can stream only events that occurred after that point, enabling reliable resume."
		},
		{
			tier: "advanced",
			question: "In a highly available etcd cluster, what is the minimum number of nodes needed to tolerate one node failure?",
			options: [
				"2 nodes",
				"3 nodes",
				"4 nodes",
				"5 nodes"
			],
			correct: 1,
			explanation: "etcd uses Raft consensus requiring a quorum of (n/2)+1. With 3 nodes, quorum is 2 — one node can fail and the cluster remains healthy."
		},
		{
			tier: "advanced",
			question: "What happens when you apply a resource and the resourceVersion in your manifest doesn't match etcd's current version?",
			options: [
				"Kubernetes silently overwrites with your version",
				"A 409 Conflict error is returned — optimistic concurrency control prevents lost updates",
				"The resource is queued for later application",
				"The newest version always wins"
			],
			correct: 1,
			explanation: "Kubernetes uses optimistic concurrency via resourceVersion. If it doesn't match, the write is rejected with 409 Conflict, preventing concurrent overwrites."
		},
		{
			tier: "advanced",
			question: "What is the role of Admission Controllers in the API server request lifecycle?",
			options: [
				"They authenticate API requests using tokens",
				"They intercept requests after authentication/authorization to validate or mutate resources before they're persisted",
				"They schedule pods to nodes",
				"They watch etcd for changes and reconcile state"
			],
			correct: 1,
			explanation: "Admission controllers run after authn/authz. Mutating controllers can modify objects; validating controllers can reject them. Examples: LimitRanger, PodSecurity, ResourceQuota."
		},
		{
			tier: "advanced",
			question: "What does etcd compaction do and when should you be careful about it in production?",
			options: [
				"Compresses etcd snapshots for backup storage",
				"Removes historical revisions from etcd storage — if too aggressive, watches may receive 'too old resource version' errors",
				"Merges etcd members to reduce cluster size",
				"Optimizes etcd network communication"
			],
			correct: 1,
			explanation: "Compaction purges old revisions. If a client's resourceVersion is compacted away, it gets a 410 Gone error and must do a full relist, which can cause load spikes."
		}
	]
},
	"1-2": {
	title: "Pod lifecycle: creation, scheduling, restarts, termination",
	questions: [
		{
			tier: "beginner",
			question: "What are the possible phases of a Pod?",
			options: [
				"Starting, Running, Stopped, Failed",
				"Pending, Running, Succeeded, Failed, Unknown",
				"Created, Scheduled, Running, Deleted",
				"Init, Ready, Running, Terminated"
			],
			correct: 1,
			explanation: "The five official pod phases are: Pending, Running, Succeeded, Failed, and Unknown."
		},
		{
			tier: "beginner",
			question: "What does a 'Pending' pod phase mean?",
			options: [
				"The pod is waiting for user approval",
				"The pod has been accepted by the cluster but one or more containers are not running yet",
				"The pod failed to start",
				"The pod is being terminated"
			],
			correct: 1,
			explanation: "Pending means the pod spec was accepted but it's either being scheduled or container images are still being pulled."
		},
		{
			tier: "beginner",
			question: "What is a CrashLoopBackOff status?",
			options: [
				"A pod that has been manually stopped",
				"A container that keeps crashing and Kubernetes is backing off restart attempts with increasing delays",
				"A network configuration error preventing pod startup",
				"A pod stuck waiting for a volume to mount"
			],
			correct: 1,
			explanation: "CrashLoopBackOff means the container exits (crashes) repeatedly. Kubernetes backs off restarts exponentially (10s, 20s, 40s... up to 5 min) to avoid hammering a broken service."
		},
		{
			tier: "beginner",
			question: "What is the default restart policy for a pod?",
			options: [
				"Never",
				"OnFailure",
				"Always",
				"OnCrash"
			],
			correct: 2,
			explanation: "The default restartPolicy is 'Always', meaning the kubelet will restart any container that exits, regardless of exit code."
		},
		{
			tier: "beginner",
			question: "What happens first when Kubernetes deletes a pod?",
			options: [
				"The container is killed immediately (SIGKILL)",
				"The pod is removed from etcd immediately",
				"A SIGTERM signal is sent to the container and a grace period begins",
				"All network connections are dropped first"
			],
			correct: 2,
			explanation: "Kubernetes sends SIGTERM and starts the grace period (default 30s). If the container doesn't exit, SIGKILL is sent after the grace period expires."
		},
		{
			tier: "beginner",
			question: "What does an Init container do?",
			options: [
				"It initializes the Kubernetes node before scheduling",
				"It runs before app containers and must complete successfully before they start",
				"It runs alongside app containers to initialize config",
				"It's a sidecar that monitors container health"
			],
			correct: 1,
			explanation: "Init containers run sequentially before any app containers. They're useful for setup tasks like waiting for a DB, fetching secrets, or pre-populating volumes."
		},
		{
			tier: "beginner",
			question: "What is the purpose of a readiness probe?",
			options: [
				"To restart a container if it becomes unhealthy",
				"To signal when a container is ready to receive traffic",
				"To check if the node has enough resources",
				"To initialize environment variables before app startup"
			],
			correct: 1,
			explanation: "A readiness probe tells Kubernetes when a pod is ready to serve traffic. The pod is removed from service endpoints until the probe succeeds."
		},
		{
			tier: "intermediate",
			question: "What is the difference between a liveness probe and a readiness probe?",
			options: [
				"Liveness checks if the app started; readiness checks if it crashed",
				"Liveness restarts the container if it fails; readiness removes the pod from service endpoints if it fails",
				"They are the same thing with different names",
				"Liveness is for stateful apps; readiness is for stateless apps"
			],
			correct: 1,
			explanation: "Liveness = is this container alive? (failure triggers restart). Readiness = should this container receive traffic? (failure removes from endpoints, no restart)."
		},
		{
			tier: "intermediate",
			question: "A pod is in 'Terminating' state for 10 minutes. What is the most likely cause?",
			options: [
				"The image is still being pulled",
				"A finalizer is set on the pod that hasn't been removed",
				"The scheduler hasn't assigned it to a node yet",
				"etcd is down"
			],
			correct: 1,
			explanation: "Finalizers prevent object deletion until their logic completes. A stuck finalizer (e.g., from a controller that's not running) keeps the pod in Terminating forever."
		},
		{
			tier: "intermediate",
			question: "What does the `terminationGracePeriodSeconds` setting control?",
			options: [
				"How long Kubernetes waits before creating a replacement pod",
				"How long the kubelet waits after SIGTERM before sending SIGKILL",
				"The time allowed for liveness probe failure before restart",
				"How long a pod can run before forced recycling"
			],
			correct: 1,
			explanation: "terminationGracePeriodSeconds (default 30) is the window your app has to handle SIGTERM and shut down cleanly before SIGKILL forcefully ends the process."
		},
		{
			tier: "intermediate",
			question: "A Django container keeps restarting with exit code 1. What is the most useful first debugging step?",
			options: [
				"Delete and recreate the pod",
				"kubectl logs <pod> --previous to see logs from the crashed container",
				"Increase the resource limits",
				"Check the node's disk space"
			],
			correct: 1,
			explanation: "kubectl logs --previous fetches logs from the previously terminated container instance, which usually contains the error that caused the crash."
		},
		{
			tier: "intermediate",
			question: "What is a postStart lifecycle hook and what is a key limitation?",
			options: [
				"It runs after all containers in the pod start; it blocks readiness probes",
				"It runs immediately after a container starts; it runs asynchronously and is NOT guaranteed to run before the container's ENTRYPOINT completes",
				"It runs before the container starts to pre-populate volumes",
				"It runs after a successful readiness probe"
			],
			correct: 1,
			explanation: "postStart runs concurrently with the container's entrypoint — they race. It's not a reliable way to run setup logic before the app starts (use init containers for that)."
		},
		{
			tier: "intermediate",
			question: "What pod condition must be True before a pod is added to a Service's Endpoints?",
			options: [
				"PodScheduled",
				"Initialized",
				"Ready",
				"ContainersReady"
			],
			correct: 2,
			explanation: "The Ready condition (which depends on readiness probes passing) must be True for the pod's IP to be included in the Service's Endpoints/EndpointSlice."
		},
		{
			tier: "intermediate",
			question: "How does Kubernetes handle a pod on a node that becomes unreachable?",
			options: [
				"Immediately reschedules the pod",
				"After node-monitor-grace-period (~40s), marks node NotReady; after pod-eviction-timeout (~5m), evicts pods",
				"Leaves the pod running indefinitely",
				"Sends an alert but takes no action"
			],
			correct: 1,
			explanation: "Kubernetes is conservative about evictions to handle transient network partitions. It waits to confirm node failure before evicting to avoid unnecessary disruption."
		},
		{
			tier: "advanced",
			question: "What is a preStop hook and why is it useful for zero-downtime deployments with Django/Gunicorn?",
			options: [
				"It pre-warms the container before receiving traffic",
				"It runs before SIGTERM, allowing time to drain connections; useful to add a sleep to let the load balancer remove the pod before it stops accepting requests",
				"It stops other containers in the pod before the main container",
				"It saves the container state before termination"
			],
			correct: 1,
			explanation: "There's a race between kube-proxy updating iptables rules and SIGTERM. A preStop sleep (e.g., 5s) gives the LB time to stop routing traffic before the app starts shutting down."
		},
		{
			tier: "advanced",
			question: "What is the difference between PodDisruptionBudget (PDB) and terminationGracePeriodSeconds?",
			options: [
				"They are the same concept at different levels",
				"PDB controls how many pods of a deployment can be unavailable simultaneously during voluntary disruptions; terminationGracePeriodSeconds controls individual pod shutdown time",
				"PDB is for stateful sets only; terminationGracePeriodSeconds is for deployments",
				"PDB is a cluster-level setting; terminationGracePeriodSeconds is a node setting"
			],
			correct: 1,
			explanation: "PDB is a cluster-level policy preventing too many pods being evicted at once (e.g., during node drain). terminationGracePeriodSeconds is per-pod shutdown window."
		},
		{
			tier: "advanced",
			question: "A startup probe is configured with failureThreshold=30 and periodSeconds=10. What is the effective startup timeout?",
			options: [
				"30 seconds",
				"10 seconds",
				"300 seconds (5 minutes)",
				"Unlimited"
			],
			correct: 2,
			explanation: "failureThreshold × periodSeconds = max time to start. 30 × 10 = 300s. Startup probes protect slow-starting apps and disable liveness/readiness probes until they pass."
		},
		{
			tier: "advanced",
			question: "What is the QoS (Quality of Service) class assigned to a pod where all containers have equal requests and limits?",
			options: [
				"BestEffort",
				"Burstable",
				"Guaranteed",
				"Dedicated"
			],
			correct: 2,
			explanation: "Guaranteed QoS requires every container to have CPU and memory requests equal to limits. These pods are the last to be OOM-killed."
		},
		{
			tier: "advanced",
			question: "What does the `shareProcessNamespace: true` pod spec field enable?",
			options: [
				"Shares environment variables between containers",
				"All containers in the pod share a single PID namespace, allowing processes to see and signal each other across containers",
				"Allows the pod to access host processes",
				"Enables shared memory between containers"
			],
			correct: 1,
			explanation: "With shareProcessNamespace, container 1 can see processes from container 2. Useful for debugging sidecars that need to attach to the main process (e.g., strace, kill signals)."
		},
		{
			tier: "advanced",
			question: "When Kubernetes performs a rolling update, under what condition can a pod be terminated?",
			options: [
				"Immediately when a new pod is created",
				"Only after the new pod passes readiness probes and is marked Ready",
				"After 30 seconds regardless of new pod status",
				"When the deployment controller decides based on CPU usage"
			],
			correct: 1,
			explanation: "During rolling updates, old pods are only terminated after new pods become Ready (pass readiness probes). This ensures traffic continuity — the key to zero-downtime deployments."
		}
	]
},
	"1-3": {
	title: "ReplicaSets, Deployments, and DaemonSets",
	questions: [
		{
			tier: "beginner",
			question: "What is the primary purpose of a ReplicaSet?",
			options: [
				"To deploy applications with zero downtime",
				"To ensure a specified number of identical pod replicas are running at all times",
				"To expose pods to external traffic",
				"To manage stateful applications"
			],
			correct: 1,
			explanation: "A ReplicaSet maintains a stable set of replica pods. If a pod fails, the ReplicaSet creates a replacement to maintain the desired count."
		},
		{
			tier: "beginner",
			question: "What is the relationship between a Deployment and a ReplicaSet?",
			options: [
				"They are the same resource",
				"A Deployment manages ReplicaSets, creating new ones during updates and scaling down old ones",
				"A ReplicaSet manages Deployments",
				"They are independent resources with no relationship"
			],
			correct: 1,
			explanation: "A Deployment is a higher-level abstraction. It creates and manages ReplicaSets, enabling rolling updates by creating a new RS while scaling down the old one."
		},
		{
			tier: "beginner",
			question: "When would you use a DaemonSet instead of a Deployment?",
			options: [
				"When you need exactly 3 replicas of a service",
				"When you need exactly one pod to run on every (or selected) node in the cluster",
				"When you need persistent storage",
				"When you need to run batch jobs"
			],
			correct: 1,
			explanation: "DaemonSets are for node-level agents: log collectors (Fluentd), monitoring (node-exporter), network plugins (Calico). One pod per node, automatically added to new nodes."
		},
		{
			tier: "beginner",
			question: "What does `kubectl rollout undo deployment/my-app` do?",
			options: [
				"Deletes the deployment",
				"Scales the deployment to zero",
				"Rolls back the deployment to the previous revision",
				"Restarts all pods in the deployment"
			],
			correct: 2,
			explanation: "kubectl rollout undo reverts the deployment to its previous ReplicaSet revision, effectively rolling back the last update."
		},
		{
			tier: "beginner",
			question: "What field in a Deployment spec controls how pods are identified and managed by the ReplicaSet?",
			options: [
				"metadata.name",
				"spec.selector.matchLabels",
				"spec.template.metadata.name",
				"spec.replicas"
			],
			correct: 1,
			explanation: "spec.selector.matchLabels defines which pods the ReplicaSet owns. Pods whose labels match this selector are managed by the ReplicaSet."
		},
		{
			tier: "beginner",
			question: "What is the default deployment strategy in Kubernetes?",
			options: [
				"Recreate",
				"BlueGreen",
				"RollingUpdate",
				"Canary"
			],
			correct: 2,
			explanation: "RollingUpdate is the default strategy. It gradually replaces old pods with new ones, maintaining availability during the update."
		},
		{
			tier: "beginner",
			question: "What does `kubectl scale deployment/my-app --replicas=5` do?",
			options: [
				"Creates 5 new deployments",
				"Sets the desired replica count to 5, creating or removing pods to match",
				"Scales the node pool to 5 nodes",
				"Creates 5 copies of the deployment spec"
			],
			correct: 1,
			explanation: "This command updates the deployment's spec.replicas to 5. The ReplicaSet controller then creates or terminates pods to reach the desired count."
		},
		{
			tier: "intermediate",
			question: "What do `maxSurge` and `maxUnavailable` control in a RollingUpdate strategy?",
			options: [
				"Maximum CPU and memory usage during updates",
				"maxSurge: extra pods above desired count during update; maxUnavailable: pods that can be unavailable below desired count during update",
				"Maximum number of nodes and pods in the cluster",
				"Maximum rollback revisions and unavailable endpoints"
			],
			correct: 1,
			explanation: "maxSurge=1 allows one extra pod during update (e.g., 4 pods when desired=3). maxUnavailable=0 ensures no pod is terminated before a new one is Ready — zero-downtime key."
		},
		{
			tier: "intermediate",
			question: "You notice many old ReplicaSets accumulating in your cluster. What controls how many are retained?",
			options: [
				"spec.replicas",
				"spec.revisionHistoryLimit (default 10)",
				"spec.selector",
				"spec.minReadySeconds"
			],
			correct: 1,
			explanation: "revisionHistoryLimit controls how many old ReplicaSets are kept for rollback. Default is 10. Setting it to 0 deletes old ReplicaSets immediately."
		},
		{
			tier: "intermediate",
			question: "What is the difference between `kubectl rollout restart` and deleting and recreating a deployment?",
			options: [
				"They are identical",
				"rollout restart does a rolling restart respecting maxUnavailable/maxSurge; deleting/recreating kills all pods simultaneously",
				"rollout restart only works for DaemonSets",
				"Deleting is faster and safer"
			],
			correct: 1,
			explanation: "kubectl rollout restart triggers a rolling restart, maintaining availability. Deleting the deployment destroys all pods immediately, causing downtime."
		},
		{
			tier: "intermediate",
			question: "A DaemonSet pod is not scheduled on a new node you added. What is the most likely reason?",
			options: [
				"DaemonSets don't support new nodes",
				"The node has a taint that the DaemonSet's pods don't tolerate",
				"The DaemonSet needs to be restarted",
				"The new node is too small"
			],
			correct: 1,
			explanation: "Taints on nodes prevent pods from scheduling unless they have a matching toleration. DaemonSets for system components often need tolerations for master/infra taints."
		},
		{
			tier: "intermediate",
			question: "What happens to DaemonSet pods when a node is drained with `kubectl drain`?",
			options: [
				"They are automatically rescheduled to other nodes",
				"They are evicted like normal pods",
				"They are deleted (not evicted) and recreated when the node becomes schedulable again; use --ignore-daemonsets to allow drain",
				"They are kept running during drain"
			],
			correct: 2,
			explanation: "DaemonSet pods are deleted (not truly evicted) during drain. Since they're node-bound, they can't be moved. --ignore-daemonsets is required for drain to complete."
		},
		{
			tier: "intermediate",
			question: "How does a Deployment's `.spec.minReadySeconds` affect rollouts?",
			options: [
				"It sets a minimum time before the deployment starts",
				"A new pod must be Ready for at least this many seconds (without restarts) before being considered available and allowing the next pod to update",
				"It's the minimum time between rolling update steps",
				"It controls liveness probe initial delay"
			],
			correct: 1,
			explanation: "minReadySeconds prevents a pod that passes readiness but immediately fails from being considered 'available'. It adds an extra stability window before proceeding."
		},
		{
			tier: "intermediate",
			question: "What is the purpose of the `Recreate` deployment strategy?",
			options: [
				"To perform blue-green deployments",
				"To terminate all existing pods before creating new ones — useful when old and new versions cannot coexist (e.g., DB schema changes)",
				"To perform canary releases",
				"To slowly replace pods one at a time"
			],
			correct: 1,
			explanation: "Recreate causes downtime by killing all pods first, then creating new ones. Use it when you can't run two versions simultaneously, like during incompatible DB migrations."
		},
		{
			tier: "advanced",
			question: "You have a Deployment with 10 replicas, maxSurge=2, maxUnavailable=0. How many pods exist at the peak of a rolling update?",
			options: [
				"10",
				"11",
				"12",
				"20"
			],
			correct: 2,
			explanation: "maxSurge=2 allows 2 extra pods above desired (10). At peak, 10 old + 2 new = 12 pods. maxUnavailable=0 ensures no old pods are removed before new ones are Ready."
		},
		{
			tier: "advanced",
			question: "A Deployment rollout is stuck at 50%. What kubectl command helps you understand why?",
			options: [
				"kubectl logs deployment/my-app",
				"kubectl rollout status deployment/my-app and kubectl describe deployment/my-app to see conditions and events",
				"kubectl get replicasets",
				"kubectl top pods"
			],
			correct: 1,
			explanation: "rollout status shows progress and blocks. describe shows conditions like 'ReplicaSetUpdated' or 'ProgressDeadlineExceeded', and events show why pods are failing to start."
		},
		{
			tier: "advanced",
			question: "What does `spec.progressDeadlineSeconds` do in a Deployment?",
			options: [
				"Sets a timeout for pod readiness probes",
				"If the deployment doesn't make progress within this time (default 600s), it's marked as failed with ProgressDeadlineExceeded",
				"Controls how long rollouts can take before auto-rollback",
				"Sets the maximum time for the entire rollout"
			],
			correct: 1,
			explanation: "progressDeadlineSeconds triggers a Failed condition if the deployment isn't making progress. It doesn't auto-rollback — you must handle that yourself (or with tooling)."
		},
		{
			tier: "advanced",
			question: "How does a DaemonSet's `updateStrategy: RollingUpdate` work differently from a Deployment's rolling update?",
			options: [
				"DaemonSet rolling update is identical to Deployment",
				"DaemonSet rolling update updates pods on one node at a time (controlled by maxUnavailable); there's no maxSurge since only one pod per node is allowed",
				"DaemonSet doesn't support rolling updates",
				"DaemonSet updates all pods simultaneously"
			],
			correct: 1,
			explanation: "Since DaemonSets run exactly one pod per node, you can't surge. maxUnavailable controls how many nodes can have their DaemonSet pod down simultaneously during update."
		},
		{
			tier: "advanced",
			question: "You need to run a new version of your app on exactly 10% of nodes for testing before full rollout. Which approach best achieves this without disrupting the main deployment?",
			options: [
				"Set replicas=0.1 on the main deployment",
				"Create a separate Deployment with a nodeSelector targeting a labeled subset of nodes, sharing the same Service selector",
				"Use maxSurge=10% on the main deployment",
				"Use a DaemonSet with a nodeSelector"
			],
			correct: 1,
			explanation: "A separate Deployment with matching labels (included in the same Service) and a nodeSelector lets you run the canary on specific nodes while the main deployment handles the rest."
		},
		{
			tier: "advanced",
			question: "What is an 'orphaned pod' in the context of ReplicaSets and how does it occur?",
			options: [
				"A pod whose node has been deleted",
				"A pod whose labels are manually changed to no longer match the ReplicaSet selector — the RS releases it and may create a replacement",
				"A pod with no resource limits",
				"A pod that has been running for too long"
			],
			correct: 1,
			explanation: "If you change a pod's labels so they no longer match the RS selector, the RS loses ownership ('orphans' it) and creates a new pod to meet replicas count. The orphaned pod runs unchecked."
		}
	]
},
	"1-4": {
	title: "ConfigMaps, Secrets, and environment injection",
	questions: [
		{
			tier: "beginner",
			question: "What is the primary difference between a ConfigMap and a Secret?",
			options: [
				"ConfigMaps are cluster-scoped; Secrets are namespace-scoped",
				"ConfigMaps store non-sensitive config data in plain text; Secrets store sensitive data that is base64-encoded (and optionally encrypted at rest)",
				"ConfigMaps support more data types than Secrets",
				"Secrets are automatically deleted after 24 hours"
			],
			correct: 1,
			explanation: "Both are namespace-scoped key-value stores. Secrets are for sensitive data (passwords, tokens) and are base64-encoded (not encrypted by default, but can be with encryption at rest)."
		},
		{
			tier: "beginner",
			question: "How can you inject a ConfigMap value as an environment variable in a container?",
			options: [
				"spec.config.envFrom",
				"spec.containers[].env[].valueFrom.configMapKeyRef",
				"spec.configMap.env",
				"metadata.annotations.configmap"
			],
			correct: 1,
			explanation: "Use env[].valueFrom.configMapKeyRef to reference a specific key from a ConfigMap as an env var, or envFrom to inject all keys at once."
		},
		{
			tier: "beginner",
			question: "What is the maximum size of a ConfigMap or Secret?",
			options: [
				"100KB",
				"1MB",
				"10MB",
				"Unlimited"
			],
			correct: 1,
			explanation: "etcd limits individual objects to 1MB. ConfigMaps and Secrets exceeding this must be split or stored externally (e.g., AWS Secrets Manager, Vault)."
		},
		{
			tier: "beginner",
			question: "What does `kubectl create secret generic db-secret --from-literal=password=mysecret` create?",
			options: [
				"A ConfigMap named db-secret",
				"A Secret of type Opaque with key 'password' and base64-encoded value 'mysecret'",
				"An encrypted Secret that requires a key to decode",
				"A Secret stored in an external vault"
			],
			correct: 1,
			explanation: "generic creates an Opaque Secret. --from-literal sets a key=value pair. The value is stored base64-encoded in etcd (not encrypted by default)."
		},
		{
			tier: "beginner",
			question: "How do you mount a ConfigMap as a file inside a container?",
			options: [
				"Using spec.containers[].configFiles",
				"By defining a volume of type configMap and mounting it via volumeMounts",
				"Using env.fromFile.configMap",
				"ConfigMaps cannot be mounted as files"
			],
			correct: 1,
			explanation: "Define a volume with type configMap, then reference it in volumeMounts. Each key in the ConfigMap becomes a file in the mounted directory."
		},
		{
			tier: "beginner",
			question: "A pod needs to access a database password stored in a Secret. Which is the more secure way to provide it?",
			options: [
				"Hard-code it in the Docker image",
				"Store it in a ConfigMap with encryption",
				"Mount the Secret as a file or environment variable via secretRef",
				"Pass it as a command-line argument"
			],
			correct: 2,
			explanation: "Mounting Secrets as files or env vars via secretRef keeps the value out of the image and Dockerfile. Environment variables are visible in process lists, so file mounting is often preferred."
		},
		{
			tier: "beginner",
			question: "What command shows the decoded value of a Secret key?",
			options: [
				"kubectl get secret my-secret -o yaml",
				"kubectl get secret my-secret -o jsonpath='{.data.password}' | base64 -d",
				"kubectl decode secret my-secret",
				"kubectl describe secret my-secret --show-values"
			],
			correct: 1,
			explanation: "kubectl get secret outputs base64-encoded values. Pipe through base64 -d (or --decode) to see the actual value."
		},
		{
			tier: "intermediate",
			question: "If you update a ConfigMap that is mounted as a volume, when does the running pod see the new values?",
			options: [
				"Immediately after the update",
				"After the pod is restarted",
				"Eventually (typically within 1-2 minutes) as kubelet syncs the mount; env vars are NOT updated until pod restart",
				"Never — mounted ConfigMaps are immutable"
			],
			correct: 2,
			explanation: "Volume-mounted ConfigMaps are eventually synced by kubelet (every syncPeriod, default ~1min). Env vars injected at start are static — you must restart the pod to get new values."
		},
		{
			tier: "intermediate",
			question: "What does `envFrom: configMapRef` do differently than `env: valueFrom: configMapKeyRef`?",
			options: [
				"They are identical",
				"envFrom injects ALL keys from the ConfigMap as env vars; valueFrom.configMapKeyRef injects a single specific key",
				"envFrom only works with Secrets",
				"valueFrom supports more data types"
			],
			correct: 1,
			explanation: "envFrom bulk-injects all ConfigMap keys as environment variables. valueFrom.configMapKeyRef is selective, mapping a specific key to a specific env var name."
		},
		{
			tier: "intermediate",
			question: "What type of Secret should you use for Docker registry credentials?",
			options: [
				"Opaque",
				"kubernetes.io/tls",
				"kubernetes.io/dockerconfigjson",
				"kubernetes.io/service-account-token"
			],
			correct: 2,
			explanation: "kubernetes.io/dockerconfigjson is the Secret type for Docker registry auth. Reference it in imagePullSecrets in the pod spec or ServiceAccount."
		},
		{
			tier: "intermediate",
			question: "What is the `immutable: true` field on a ConfigMap or Secret used for?",
			options: [
				"Prevents kubectl from viewing the data",
				"Prevents any changes to the data after creation, and improves performance by stopping kubelet from watching for changes",
				"Makes the resource cluster-scoped",
				"Enables automatic encryption"
			],
			correct: 1,
			explanation: "Immutable ConfigMaps/Secrets cannot be edited (only deleted/recreated). This protects against accidental changes and improves cluster performance at scale."
		},
		{
			tier: "intermediate",
			question: "How would you inject Django's SECRET_KEY from a Kubernetes Secret without restarting the pod on rotation?",
			options: [
				"Use env.valueFrom.secretKeyRef and restart on rotation",
				"Mount the Secret as a file, have Django read from the file at request time, and rely on kubelet's volume sync for rotation",
				"Django SECRET_KEY cannot be rotated without downtime",
				"Store it in a ConfigMap for easier updates"
			],
			correct: 1,
			explanation: "File-mounted Secrets are synced by kubelet. If your app reads the file on each request (or watches for changes), you get rotation without restarts. Env vars require a pod restart."
		},
		{
			tier: "intermediate",
			question: "What is a projected volume and why is it useful for Secrets and ConfigMaps?",
			options: [
				"A volume that projects from one namespace to another",
				"A single volume that combines multiple sources (Secrets, ConfigMaps, ServiceAccountTokens, DownwardAPI) into one mount point",
				"A volume type that stores data on the cloud provider",
				"A volume with compression enabled"
			],
			correct: 1,
			explanation: "Projected volumes let you mount multiple ConfigMaps and Secrets into a single directory, simplifying complex apps that need many configuration sources."
		},
		{
			tier: "intermediate",
			question: "What happens if a pod references a non-existent Secret in its spec?",
			options: [
				"The pod starts without that environment variable",
				"The pod remains in Pending state with a CreateContainerConfigError",
				"Kubernetes creates an empty Secret automatically",
				"The pod starts but crashes with a missing env var error"
			],
			correct: 1,
			explanation: "If a required Secret doesn't exist, kubelet cannot create the container, leaving the pod in Pending with a CreateContainerConfigError or ContainerCannotRun event."
		},
		{
			tier: "advanced",
			question: "What is the security risk of using environment variables for Secrets vs. file mounts?",
			options: [
				"No difference — both are equally secure",
				"Env vars are visible in /proc/<pid>/environ on the host, in kubectl describe output (pre-1.20), and in crash dumps; file mounts in tmpfs are less exposed",
				"File mounts are less secure because files can be read by any process",
				"Environment variables are encrypted by Kubernetes automatically"
			],
			correct: 1,
			explanation: "Env vars can leak via /proc, core dumps, and process inspection tools. Secrets mounted as files in in-memory tmpfs volumes are harder to accidentally expose."
		},
		{
			tier: "advanced",
			question: "How do you enable envelope encryption for Secrets at rest in Kubernetes?",
			options: [
				"Add encryption: true to the Secret spec",
				"Configure a KMS provider in the kube-apiserver's EncryptionConfiguration and reference a KMS key (e.g., AWS KMS)",
				"Secrets are always encrypted in newer Kubernetes versions",
				"Use a StorageClass with encryption enabled"
			],
			correct: 1,
			explanation: "By default, Secrets are only base64-encoded in etcd. You must configure EncryptionConfiguration on the apiserver with a KMS or AES-CBC provider for actual encryption at rest."
		},
		{
			tier: "advanced",
			question: "What is the Downward API and how does it relate to ConfigMaps?",
			options: [
				"The API for downgrading Kubernetes versions",
				"A mechanism to inject pod/node metadata (name, namespace, labels, resource limits) as env vars or files — similar to ConfigMaps but sourced from the pod's own metadata",
				"An API for accessing ConfigMaps from outside the cluster",
				"A deprecated way to mount Secrets"
			],
			correct: 1,
			explanation: "The Downward API exposes pod metadata to the pod itself — pod name, node name, resource limits, labels. Useful for apps that need to know where/who they are without querying the API."
		},
		{
			tier: "advanced",
			question: "An External Secrets Operator is used in your cluster. What problem does it solve that native Secrets don't?",
			options: [
				"It makes Secrets larger than 1MB",
				"It syncs secrets from external stores (AWS Secrets Manager, HashiCorp Vault) into Kubernetes Secrets, handling rotation and audit trails that native Secrets lack",
				"It encrypts Secrets automatically",
				"It allows Secrets to be shared across namespaces"
			],
			correct: 1,
			explanation: "Native K8s Secrets don't handle sourcing from external vaults or automatic rotation. External Secrets Operator bridges this gap by syncing from provider APIs and updating the K8s Secret."
		},
		{
			tier: "advanced",
			question: "What is the risk of using `kubectl create configmap` in CI/CD pipelines and how should it be handled?",
			options: [
				"ConfigMaps cannot be created via CLI",
				"It's not idempotent — running it twice fails with 'already exists'. Use kubectl apply with a manifest file or --dry-run=client | kubectl apply -f - pattern",
				"It creates ConfigMaps in the wrong namespace",
				"CI/CD pipelines don't have permission to create ConfigMaps"
			],
			correct: 1,
			explanation: "kubectl create fails on existing resources. In CI/CD, use kubectl apply with YAML manifests (gitops-friendly) or the create --dry-run=client | apply pattern for idempotency."
		},
		{
			tier: "advanced",
			question: "You have a microservice that reads 50 configuration keys. What are the trade-offs of one large ConfigMap vs many small ones?",
			options: [
				"No trade-offs — they are equivalent",
				"One large ConfigMap is simpler to manage but creates a single point of failure and larger watch events; small ConfigMaps are more granular but harder to maintain and each mount adds overhead",
				"Many ConfigMaps are always better for performance",
				"One ConfigMap is always the right choice for a single service"
			],
			correct: 1,
			explanation: "Large ConfigMaps simplify management but mean a single change triggers full resync. Splitting by concern (app config, feature flags, DB config) balances granularity with manageability."
		}
	]
},
	"1-5": {
	title: "Boss: Deploy multi-container app (Django + Postgres) with minikube",
	questions: [
		{
			tier: "beginner",
			question: "How should a Django app container connect to a Postgres container in the same Kubernetes namespace?",
			options: [
				"Using localhost:5432",
				"Using the Postgres Service name as the hostname (e.g., postgres-service:5432)",
				"Using the pod IP address",
				"Using the node's IP address"
			],
			correct: 1,
			explanation: "Kubernetes DNS resolves Service names within a namespace. Use the Service name as the hostname in DATABASE_URL — it's stable and survives pod restarts unlike pod IPs."
		},
		{
			tier: "beginner",
			question: "Which Kubernetes resource is most appropriate for deploying the Postgres database?",
			options: [
				"Deployment",
				"DaemonSet",
				"StatefulSet",
				"CronJob"
			],
			correct: 2,
			explanation: "StatefulSet gives Postgres a stable network identity and stable PersistentVolume mounts — critical for a database where pod identity and data persistence matter."
		},
		{
			tier: "beginner",
			question: "What happens to your Postgres data if you use a Deployment (not StatefulSet) and the pod restarts without a PersistentVolumeClaim?",
			options: [
				"Data is preserved in etcd",
				"All data is lost since the container filesystem is ephemeral",
				"Data is automatically backed up to S3",
				"Data persists in the container image layer"
			],
			correct: 1,
			explanation: "Container filesystems are ephemeral. Without a PVC, every pod restart starts with a fresh empty filesystem. Always use PVCs for stateful workloads like databases."
		},
		{
			tier: "beginner",
			question: "What minikube command is needed to build a local Docker image and make it available to minikube's Kubernetes cluster?",
			options: [
				"docker push minikube",
				"eval $(minikube docker-env) then docker build, OR minikube image load <image>",
				"minikube import image",
				"kubectl load image"
			],
			correct: 1,
			explanation: "minikube runs its own Docker daemon. Either point your shell's docker CLI to it with eval $(minikube docker-env) and build there, or use minikube image load after building locally."
		},
		{
			tier: "beginner",
			question: "What is the correct imagePullPolicy setting when using locally-built images in minikube?",
			options: [
				"Always",
				"IfNotPresent or Never",
				"Latest",
				"OnFailure"
			],
			correct: 1,
			explanation: "With local images, use imagePullPolicy: IfNotPresent or Never. Using Always tries to pull from a registry which will fail for local-only images."
		},
		{
			tier: "beginner",
			question: "How do you run Django database migrations before the main app starts in Kubernetes?",
			options: [
				"Add migration commands to the Dockerfile CMD",
				"Use an Init Container that runs python manage.py migrate before the main Django container starts",
				"Manually exec into the pod and run migrations",
				"Migrations run automatically when Django starts"
			],
			correct: 1,
			explanation: "Init containers are perfect for migrations — they run to completion before app containers start, ensuring the DB schema is ready. They also benefit from retry logic if the DB isn't ready yet."
		},
		{
			tier: "beginner",
			question: "What Service type should you use for Postgres to make it accessible only within the cluster?",
			options: [
				"LoadBalancer",
				"NodePort",
				"ExternalName",
				"ClusterIP"
			],
			correct: 3,
			explanation: "ClusterIP (the default) creates an internal-only virtual IP. Databases should never be exposed externally — ClusterIP keeps Postgres accessible only to other pods in the cluster."
		},
		{
			tier: "intermediate",
			question: "After kubectl delete pod on the Postgres StatefulSet pod, what should happen?",
			options: [
				"The StatefulSet creates a new pod with a new PVC",
				"The StatefulSet creates a new pod with the same name and reattaches to the existing PVC",
				"Data is lost and must be restored from backup",
				"The pod is not recreated automatically"
			],
			correct: 1,
			explanation: "StatefulSets maintain sticky identities. The new pod gets the same name (e.g., postgres-0) and reattaches to its existing PVC, preserving all data."
		},
		{
			tier: "intermediate",
			question: "How should Django's DATABASE_URL be provided in the pod spec?",
			options: [
				"Hard-coded in the Deployment YAML",
				"From a Secret using env.valueFrom.secretKeyRef or envFrom.secretRef",
				"From a ConfigMap as a plain text value",
				"Embedded in the Docker image as an environment variable"
			],
			correct: 1,
			explanation: "Database credentials (password, full URL) must come from Secrets — never ConfigMaps (which are plain text) and never hard-coded in images or YAML."
		},
		{
			tier: "intermediate",
			question: "What readiness probe is appropriate for the Django/Gunicorn container?",
			options: [
				"A TCP probe on port 8000",
				"An httpGet probe to /health/ (or a health check endpoint) on port 8000",
				"An exec probe that checks if the process is running",
				"No probe is needed for web apps"
			],
			correct: 1,
			explanation: "An HTTP readiness probe to a health endpoint (e.g., /health/) ensures the pod only receives traffic when Django and Gunicorn are fully initialized and able to handle requests."
		},
		{
			tier: "intermediate",
			question: "How should the Django init container handle the case where Postgres isn't ready yet?",
			options: [
				"The init container will automatically retry",
				"Use a wait-for-it.sh script or a retry loop before running manage.py migrate",
				"Django migrations automatically wait for the database",
				"Add a long sleep before migrations"
			],
			correct: 1,
			explanation: "Init containers don't auto-retry their main command. Use a script with a retry loop (e.g., wait-for-it.sh, netcat loop) to wait for Postgres to accept connections before migrating."
		},
		{
			tier: "intermediate",
			question: "What is the recommended way to store the Postgres data directory in minikube?",
			options: [
				"EmptyDir volume",
				"HostPath volume",
				"A PersistentVolumeClaim with the standard storage class",
				"ConfigMap volume"
			],
			correct: 2,
			explanation: "PVCs with the standard StorageClass (minikube provides hostpath provisioner) give you proper storage lifecycle management and are the production-equivalent pattern."
		},
		{
			tier: "intermediate",
			question: "You want to expose the Django app locally in minikube. Which is the easiest way?",
			options: [
				"kubectl expose with LoadBalancer type",
				"minikube service <service-name> to open a tunnel to a NodePort or LoadBalancer service",
				"Use Ingress with nginx",
				"Port-forward with kubectl port-forward"
			],
			correct: 1,
			explanation: "minikube service <name> automatically opens a tunnel and browser URL to a NodePort/LoadBalancer service. kubectl port-forward also works but is more manual."
		},
		{
			tier: "intermediate",
			question: "What is the purpose of a headless Service for a StatefulSet?",
			options: [
				"A Service with no endpoints",
				"A Service with clusterIP: None that creates stable DNS records for each pod (e.g., postgres-0.postgres-headless.default.svc.cluster.local)",
				"A Service without a selector",
				"A Service only accessible from the same namespace"
			],
			correct: 1,
			explanation: "Headless Services don't get a cluster IP. Instead, DNS returns individual pod IPs, enabling direct pod addressing — essential for databases and clustered apps."
		},
		{
			tier: "advanced",
			question: "How would you handle Django's ALLOWED_HOSTS in Kubernetes where the pod IP and service hostname change?",
			options: [
				"Hardcode the pod IP in ALLOWED_HOSTS",
				"Set ALLOWED_HOSTS via a ConfigMap with the Service name and optionally '*' for internal cluster traffic, or use a reverse proxy that strips the Host header",
				"Django automatically detects Kubernetes hostnames",
				"Disable ALLOWED_HOSTS validation in Kubernetes"
			],
			correct: 1,
			explanation: "Set ALLOWED_HOSTS to include the Service name and your external domain. Behind nginx-ingress, the proxy rewrites Host headers, so configuring nginx to pass the correct host or using wildcard is common."
		},
		{
			tier: "advanced",
			question: "What Kubernetes resource would you use to run Django management commands (e.g., collectstatic) once before deployment?",
			options: [
				"Init Container in the Deployment",
				"A Job resource that runs the command to completion, triggered before deployment",
				"CronJob running every minute",
				"A sidecar container"
			],
			correct: 1,
			explanation: "A Kubernetes Job runs to completion exactly once (or a specified number of times). It's ideal for one-time tasks like collectstatic. A Helm pre-install hook can trigger it before the main deployment."
		},
		{
			tier: "advanced",
			question: "How do you ensure the Django Deployment does not start until Postgres is fully ready in a production scenario?",
			options: [
				"Add a sleep 60 to the deployment YAML",
				"Use an Init Container with a readiness check, combined with a Helm hook ordering the Postgres StatefulSet before the Django Deployment",
				"Kubernetes automatically handles dependency ordering",
				"Use a NetworkPolicy to block Django until Postgres is ready"
			],
			correct: 1,
			explanation: "Kubernetes has no native dependency management between workloads. Init containers that wait for DB readiness (plus optionally Helm hooks for ordering) are the production-grade solution."
		},
		{
			tier: "advanced",
			question: "What does `kubectl delete pod <postgres-pod>` test in terms of data persistence?",
			options: [
				"Network persistence",
				"That the StatefulSet recreates the pod AND that PVC reattachment works, meaning data written before deletion is available after recovery",
				"That liveness probes work correctly",
				"That the Service still routes traffic correctly"
			],
			correct: 1,
			explanation: "This test verifies the full StatefulSet recovery path: pod recreation with same identity, PVC reattachment, and data integrity. It's the minimum viable production resilience test."
		},
		{
			tier: "advanced",
			question: "What is the risk of running Postgres as root inside a Kubernetes container?",
			options: [
				"No risk — containers are already isolated",
				"Root in a container can exploit host kernel vulnerabilities or escape the container if securityContext is not properly configured; use a securityContext.runAsUser and runAsNonRoot: true",
				"Postgres requires root to run",
				"Root is required for volume mounts"
			],
			correct: 1,
			explanation: "Container root privileges can be leveraged in container escape attacks. Always set securityContext.runAsNonRoot: true and use Postgres's official image which supports running as postgres user (uid 70)."
		},
		{
			tier: "advanced",
			question: "In a production Kubernetes deployment, what is wrong with using a single Postgres pod (even with a PVC) for a critical Django application?",
			options: [
				"Nothing — PVC ensures data is safe",
				"Single pod = single point of failure with no automatic failover. Node failure causes downtime. Use Postgres HA solutions (e.g., CloudNativePG operator, Patroni) or managed RDS",
				"Postgres doesn't work as a single pod",
				"PVCs don't persist data across pod restarts"
			],
			correct: 1,
			explanation: "PVCs survive pod restarts but not node failures (if using hostpath). More critically, there's no automatic failover. Production needs HA Postgres with primary/replica or a managed service."
		}
	]
},
	"2-1": {
	title: "ClusterIP, NodePort, LoadBalancer — traffic path",
	questions: [
		{
			tier: "beginner",
			question: "What is a ClusterIP Service?",
			options: [
				"A Service with a public IP address",
				"A virtual IP that is only accessible from within the cluster",
				"A Service that exposes a port on every node",
				"A Service that uses cloud load balancer"
			],
			correct: 1,
			explanation: "ClusterIP is the default Service type. It creates an internal virtual IP, accessible only from within the cluster. Ideal for internal microservice communication."
		},
		{
			tier: "beginner",
			question: "What is a NodePort Service?",
			options: [
				"A Service only accessible from a specific node",
				"A Service that opens a specific port (30000-32767) on every node in the cluster, forwarding to the target pods",
				"A Service that creates a cloud load balancer",
				"A Service limited to the node running the pod"
			],
			correct: 1,
			explanation: "NodePort exposes the Service on a static port on every node's IP. External traffic can reach it via <NodeIP>:<NodePort>. Used for dev/testing; not recommended for production."
		},
		{
			tier: "beginner",
			question: "How does a LoadBalancer Service differ from a NodePort Service?",
			options: [
				"They are identical",
				"LoadBalancer provisions an external cloud load balancer (AWS ELB, GCP LB) with a public IP; NodePort only opens a port on nodes",
				"LoadBalancer only works in on-premises clusters",
				"NodePort is more expensive than LoadBalancer"
			],
			correct: 1,
			explanation: "LoadBalancer extends NodePort by also provisioning a cloud provider load balancer. External traffic hits the LB, which routes to nodes, then to pods."
		},
		{
			tier: "beginner",
			question: "What does a Service selector do?",
			options: [
				"Selects which nodes run the pods",
				"Identifies which pods the Service should route traffic to based on matching labels",
				"Selects which namespace the Service belongs to",
				"Filters incoming requests by HTTP method"
			],
			correct: 1,
			explanation: "The selector field uses label matching to identify pods. Any pod with matching labels gets added to the Service's Endpoints and receives traffic."
		},
		{
			tier: "beginner",
			question: "What is the NodePort range by default?",
			options: [
				"1-1024",
				"8000-9000",
				"30000-32767",
				"32768-65535"
			],
			correct: 2,
			explanation: "Kubernetes reserves the 30000-32767 port range for NodePort Services to avoid conflicts with well-known ports and system services."
		},
		{
			tier: "beginner",
			question: "What happens to traffic sent to a ClusterIP Service?",
			options: [
				"It's routed to the node running the service",
				"kube-proxy uses iptables (or IPVS) rules to randomly load balance across all Ready pods matching the selector",
				"It goes to the pod with the most resources",
				"It's routed to the oldest pod"
			],
			correct: 1,
			explanation: "kube-proxy programs iptables/IPVS rules on every node. When traffic hits the ClusterIP, these rules DNAT it to a randomly selected pod IP."
		},
		{
			tier: "beginner",
			question: "What does `kubectl expose deployment my-app --port=80 --target-port=8000` create?",
			options: [
				"An Ingress resource",
				"A ClusterIP Service mapping port 80 to container port 8000",
				"A LoadBalancer Service",
				"A NodePort Service on port 80"
			],
			correct: 1,
			explanation: "kubectl expose creates a Service (ClusterIP by default). port=80 is the Service port; target-port=8000 is the container port Django/Gunicorn listens on."
		},
		{
			tier: "intermediate",
			question: "What is kube-proxy's role in Service networking?",
			options: [
				"It proxies all pod-to-pod traffic",
				"It watches the API server for Service/Endpoints changes and programs node-local iptables or IPVS rules to implement Service load balancing",
				"It manages DNS for Services",
				"It creates cloud load balancers"
			],
			correct: 1,
			explanation: "kube-proxy doesn't proxy traffic in-band in modern modes. It programs kernel-level iptables/IPVS rules that intercept traffic to ClusterIPs and redirect to pod IPs."
		},
		{
			tier: "intermediate",
			question: "What is `externalTrafficPolicy: Local` on a Service and what is its trade-off?",
			options: [
				"Routes only local (same datacenter) traffic",
				"Preserves client source IPs by routing only to pods on the same node, but causes uneven load distribution if nodes have different pod counts",
				"Only allows traffic from local network ranges",
				"Makes the service only accessible from localhost"
			],
			correct: 1,
			explanation: "Local policy sends traffic only to pods on the same node as the receiving node, preserving source IP. But if a node has no pods, traffic to it is dropped, and load is uneven."
		},
		{
			tier: "intermediate",
			question: "You create a Service but it has no Endpoints. What are the likely causes?",
			options: [
				"The Service is in the wrong namespace and the apiserver is down",
				"No pods match the selector labels, or matching pods have no Ready condition (failing readiness probes)",
				"The Service port is incorrect",
				"ClusterIP cannot have Endpoints"
			],
			correct: 1,
			explanation: "Check: 1) Do pods have the labels matching the Service selector? 2) Are pods Ready? kubectl get endpoints <service> and kubectl describe pod show both."
		},
		{
			tier: "intermediate",
			question: "What is an ExternalName Service?",
			options: [
				"A Service with an external IP",
				"A Service that maps a Kubernetes DNS name to an external CNAME (e.g., my-db.default.svc.cluster.local → rds.amazonaws.com)",
				"A Service without a selector",
				"A NodePort with an external IP"
			],
			correct: 1,
			explanation: "ExternalName returns a CNAME record instead of a ClusterIP. It's used to give external services (like RDS) a Kubernetes-native DNS name, enabling easier migration."
		},
		{
			tier: "intermediate",
			question: "What is the full DNS name of a Service named 'api' in namespace 'production'?",
			options: [
				"api.production",
				"api.production.cluster.local",
				"api.production.svc.cluster.local",
				"production.api.svc"
			],
			correct: 2,
			explanation: "Kubernetes DNS follows: <service>.<namespace>.svc.cluster.local. Within the same namespace, just 'api' resolves. Across namespaces, use 'api.production' or the full name."
		},
		{
			tier: "intermediate",
			question: "When should you use a Headless Service (clusterIP: None)?",
			options: [
				"For external traffic only",
				"When clients need to discover all individual pod IPs directly (e.g., databases, Kafka, custom load balancing) instead of using a virtual ClusterIP",
				"When you don't need load balancing at all",
				"For StatefulSets only"
			],
			correct: 1,
			explanation: "Headless Services return DNS records for each pod IP. Clients get all IPs and handle load balancing themselves. Required for StatefulSet stable network identities."
		},
		{
			tier: "intermediate",
			question: "What does `sessionAffinity: ClientIP` on a Service do?",
			options: [
				"Routes only traffic from specific client IPs",
				"Ensures requests from the same client IP are always routed to the same pod (sticky sessions)",
				"Blocks traffic from unknown IPs",
				"Routes traffic based on HTTP session cookies"
			],
			correct: 1,
			explanation: "ClientIP affinity implements sticky sessions at the IP level. Useful for apps that store session state in memory. Not recommended if you're using a proper session store like Redis."
		},
		{
			tier: "advanced",
			question: "What is IPVS mode in kube-proxy and how does it compare to iptables mode?",
			options: [
				"They are identical",
				"IPVS uses kernel-level hash tables for O(1) service lookup vs iptables' O(n) linear rules, making it significantly faster at large scale (thousands of services)",
				"IPVS is slower but more reliable",
				"IPVS only works with LoadBalancer services"
			],
			correct: 1,
			explanation: "At 10,000+ Services, iptables rules become a bottleneck (linear scan). IPVS uses hash tables for constant-time lookup and supports more load balancing algorithms (round-robin, least-connection, etc.)."
		},
		{
			tier: "advanced",
			question: "What is the role of EndpointSlices vs Endpoints in large clusters?",
			options: [
				"They are the same resource",
				"EndpointSlices shard endpoint data into chunks of 100 pods max, reducing API server memory and network traffic at scale compared to single large Endpoints objects",
				"EndpointSlices are for external traffic only",
				"Endpoints are deprecated and replaced by EndpointSlices in K8s 1.21+"
			],
			correct: 1,
			explanation: "A single Endpoints object for a large service (1000+ pods) is huge and causes performance issues. EndpointSlices split this into smaller objects, only updating changed slices."
		},
		{
			tier: "advanced",
			question: "What is a Service Topology (now replaced by topology-aware routing) and what problem did it solve?",
			options: [
				"Routing based on node labels",
				"Routing traffic preferentially to pods in the same zone/region as the requesting client, reducing cross-zone latency and data transfer costs",
				"Topology-based scheduling of pods",
				"Network policy based on cluster topology"
			],
			correct: 1,
			explanation: "Topology-aware routing routes traffic to pods in the same availability zone when possible, reducing cross-AZ latency and AWS/GCP inter-zone data transfer costs."
		},
		{
			tier: "advanced",
			question: "What happens to in-flight connections when a pod is removed from a Service's Endpoints during a rolling update?",
			options: [
				"They complete normally",
				"There's a race condition: kube-proxy updates iptables asynchronously, so some connections may be terminated mid-flight. Use connection draining and preStop hooks to mitigate",
				"Kubernetes migrates them to the new pod",
				"They are buffered and retried automatically"
			],
			correct: 1,
			explanation: "There's an inherent race between pod termination and iptables rule removal. The preStop sleep pattern gives kube-proxy time to update rules before the pod stops accepting connections."
		},
		{
			tier: "advanced",
			question: "What is dual-stack networking in Kubernetes Services?",
			options: [
				"Running two separate cluster networks",
				"A Service that has both IPv4 and IPv6 addresses, enabling connectivity from both address families",
				"A Service with both ClusterIP and NodePort",
				"Running kube-proxy in both iptables and IPVS mode"
			],
			correct: 1,
			explanation: "Dual-stack Services (K8s 1.21+) get both IPv4 and IPv6 ClusterIPs. Requires dual-stack cluster setup but enables gradual IPv4→IPv6 migration."
		},
		{
			tier: "advanced",
			question: "A LoadBalancer Service in EKS is stuck in 'Pending' state for the external IP. What are the likely causes?",
			options: [
				"LoadBalancer type is not supported in EKS",
				"Missing AWS Load Balancer Controller or wrong IAM permissions; the controller that provisions ELBs is not running or lacks permission to create ELB resources",
				"The Service needs an annotation first",
				"LoadBalancer requires at least 3 nodes"
			],
			correct: 1,
			explanation: "EKS needs the AWS Load Balancer Controller (replacing deprecated in-tree cloud provider). If it's missing or its IAM role lacks elasticloadbalancing:* permissions, the LB won't be provisioned."
		}
	]
},
	"2-2": {
	title: "Services and DNS resolution inside the cluster",
	questions: [
		{
			tier: "beginner",
			question: "What Kubernetes component handles DNS resolution for Services within the cluster?",
			options: [
				"kube-proxy",
				"kube-scheduler",
				"CoreDNS",
				"kubelet"
			],
			correct: 2,
			explanation: "CoreDNS (running as a Deployment in kube-system) is the cluster DNS server. It resolves Service names to ClusterIPs and pod hostnames."
		},
		{
			tier: "beginner",
			question: "How does a pod know which DNS server to use?",
			options: [
				"It's hardcoded in the container image",
				"kubelet configures /etc/resolv.conf in each pod to point to the CoreDNS ClusterIP",
				"Pods use the node's DNS settings",
				"DNS is not available inside pods"
			],
			correct: 1,
			explanation: "kubelet injects a resolv.conf into every pod pointing to the CoreDNS Service IP (usually 10.96.0.10). The search domains are also set for short-name resolution."
		},
		{
			tier: "beginner",
			question: "What search domains are set in a pod's /etc/resolv.conf by default?",
			options: [
				"cluster.local only",
				"<namespace>.svc.cluster.local, svc.cluster.local, cluster.local (plus node's search domains)",
				"svc.cluster.local only",
				"No search domains"
			],
			correct: 1,
			explanation: "The search domains enable short-name resolution. 'myservice' resolves by trying myservice.<namespace>.svc.cluster.local first, then svc.cluster.local, then cluster.local."
		},
		{
			tier: "beginner",
			question: "From inside a pod in namespace 'default', how do you resolve a Service named 'redis'?",
			options: [
				"Just 'redis' (short name works due to search domains)",
				"redis.default.svc.cluster.local",
				"redis.cluster.local",
				"All of the above work"
			],
			correct: 3,
			explanation: "All forms work. Short name 'redis' is resolved by appending search domains. The FQDN redis.default.svc.cluster.local always works from any namespace."
		},
		{
			tier: "beginner",
			question: "What DNS record type does a standard (non-headless) ClusterIP Service return?",
			options: [
				"CNAME pointing to pods",
				"A record returning the ClusterIP virtual IP",
				"Multiple A records for each pod",
				"SRV records for port discovery"
			],
			correct: 1,
			explanation: "A standard Service returns a single A record with the ClusterIP. kube-proxy then handles load balancing to actual pods."
		},
		{
			tier: "beginner",
			question: "What does nslookup kubernetes.default.svc.cluster.local return from inside a pod?",
			options: [
				"Error — not a valid DNS name",
				"The IP of the kube-apiserver Service in the default namespace",
				"The IPs of all nodes",
				"The Kubernetes version"
			],
			correct: 1,
			explanation: "The 'kubernetes' Service in the 'default' namespace exposes the API server. Its FQDN resolves to the apiserver's ClusterIP."
		},
		{
			tier: "beginner",
			question: "What is ndots:5 in /etc/resolv.conf and why does Kubernetes set it?",
			options: [
				"The maximum number of DNS retries",
				"If a name has fewer than 5 dots, search domains are tried first before treating it as an absolute name — allows short service names to resolve",
				"The number of DNS servers to query",
				"The DNS cache TTL in seconds"
			],
			correct: 1,
			explanation: "ndots:5 means names with <5 dots try search domains first. This enables 'redis' to resolve via search domains before trying external DNS."
		},
		{
			tier: "intermediate",
			question: "What DNS records does a headless Service (clusterIP: None) return?",
			options: [
				"No DNS records",
				"One A record per Ready pod IP",
				"A CNAME to each pod",
				"An SRV record for the service port"
			],
			correct: 1,
			explanation: "Headless Services return A records for each Ready pod IP directly. DNS round-robin across pod IPs, enabling clients to discover and connect to individual pods."
		},
		{
			tier: "intermediate",
			question: "A pod can't resolve an external hostname like google.com. What is the likely cause?",
			options: [
				"Kubernetes doesn't support external DNS",
				"CoreDNS is configured to only resolve internal names and doesn't have a forwarder configured, or CoreDNS pods are down",
				"The pod needs a different dnsPolicy",
				"External names must be configured as ExternalName Services"
			],
			correct: 1,
			explanation: "CoreDNS has a forward plugin to upstream DNS servers (usually the node's DNS or 8.8.8.8). If CoreDNS is misconfigured or down, external resolution fails."
		},
		{
			tier: "intermediate",
			question: "What is the dnsPolicy 'None' used for?",
			options: [
				"Disables DNS in the pod",
				"Allows you to provide completely custom DNS configuration via dnsConfig, ignoring cluster defaults",
				"Makes the pod use only external DNS",
				"Used for init containers only"
			],
			correct: 1,
			explanation: "dnsPolicy: None combined with dnsConfig lets you specify custom nameservers, search domains, and options — useful for pods with special DNS requirements."
		},
		{
			tier: "intermediate",
			question: "How would you troubleshoot a pod that cannot resolve the Service DNS name?",
			options: [
				"Restart the pod and try again",
				"kubectl exec into the pod, run nslookup <service>, check CoreDNS pod logs, verify CoreDNS Endpoints, check NetworkPolicy blocking UDP 53",
				"Delete the Service and recreate it",
				"Restart kube-proxy"
			],
			correct: 1,
			explanation: "Systematic debugging: test resolution from the pod, check CoreDNS is running and has endpoints, review CoreDNS logs for errors, verify NetworkPolicy isn't blocking DNS (UDP/TCP port 53)."
		},
		{
			tier: "intermediate",
			question: "What SRV DNS records does Kubernetes create for a StatefulSet's headless Service?",
			options: [
				"No SRV records are created",
				"SRV records in format _port._protocol.service.namespace.svc.cluster.local pointing to individual pod hostnames",
				"SRV records only for HTTP services",
				"SRV records for all pod ports automatically"
			],
			correct: 1,
			explanation: "Kubernetes creates SRV records for named ports on headless Services. This enables service discovery with port information, used by etcd, Cassandra, and other clustered systems."
		},
		{
			tier: "intermediate",
			question: "What is the CoreDNS 'autopath' plugin and when should you consider disabling it?",
			options: [
				"Plugin for automatic DNS certificate management",
				"Plugin that intercepts NXDOMAIN responses and retries with search domains, reducing DNS queries; disable if causing high CoreDNS load in large clusters",
				"Plugin for automatic Service DNS creation",
				"Plugin for external DNS provider integration"
			],
			correct: 1,
			explanation: "Autopath reduces pod DNS lookups by resolving search domain suffixes at CoreDNS rather than requiring the pod to retry. However, it can increase CoreDNS memory usage in large clusters."
		},
		{
			tier: "intermediate",
			question: "A pod has dnsPolicy: ClusterFirstWithHostNet. When is this used?",
			options: [
				"For pods that don't need DNS",
				"For pods using hostNetwork: true — ClusterFirst is used by default only for non-hostNetwork pods; this explicitly requests cluster DNS for host-networked pods",
				"For StatefulSet pods only",
				"For pods with custom DNS configs"
			],
			correct: 1,
			explanation: "hostNetwork pods default to the node's DNS. ClusterFirstWithHostNet overrides this so they use CoreDNS, useful for host-networked system pods that still need cluster DNS."
		},
		{
			tier: "advanced",
			question: "What is DNS-based service discovery's main limitation compared to using the Kubernetes API directly?",
			options: [
				"DNS is less secure",
				"DNS has caching (TTL) that can serve stale records for up to 30 seconds after pod changes, causing brief periods of failed connections; API watches are near-instantaneous",
				"DNS doesn't support multiple ports",
				"DNS can't resolve cross-namespace services"
			],
			correct: 1,
			explanation: "DNS TTLs (Kubernetes Services use 5-30s) mean clients may cache a stale IP. After a pod restart, there's a window where DNS still points to the old IP. Client retry logic is essential."
		},
		{
			tier: "advanced",
			question: "What is the ndots:5 setting's impact on performance and how can you optimize it?",
			options: [
				"It has no performance impact",
				"With ndots:5, a query for 'redis.us-east-1.rds.amazonaws.com' (4 dots) tries 3 search domains first (9 DNS queries total) before succeeding; reduce ndots or use FQDNs with trailing dot",
				"Increase ndots to reduce retries",
				"ndots only affects StatefulSet DNS"
			],
			correct: 1,
			explanation: "Each non-FQDN external lookup with <5 dots generates multiple queries (appending each search domain). Use FQDNs (trailing dot) or reduce ndots for latency-sensitive external calls."
		},
		{
			tier: "advanced",
			question: "What is the 'negative caching' issue with CoreDNS and how does it affect your Django app?",
			options: [
				"CoreDNS caches failed DNS queries",
				"Some CoreDNS configurations don't cache NXDOMAIN responses, causing repeated failed lookups for non-existent names to hammer CoreDNS; Django's ORM connections may be affected",
				"CoreDNS negatively caches all external queries",
				"Negative caching only affects UDP DNS"
			],
			correct: 0,
			explanation: "Without negative caching, every NXDOMAIN response triggers a new query. If your app makes many failed lookups (typos, missing services), it can overload CoreDNS. Configure the cache plugin appropriately."
		},
		{
			tier: "advanced",
			question: "What is CoreDNS's 'forward' plugin and what are the security considerations?",
			options: [
				"Forwards external DNS queries to upstream resolvers; risk is DNS amplification attacks if the cluster is misconfigured",
				"Forwards internal DNS only",
				"A plugin for Service mesh integration",
				"Forwards HTTP traffic"
			],
			correct: 0,
			explanation: "The forward plugin sends external queries to upstream DNS (e.g., 8.8.8.8 or node-local DNS). Security concern: DNS exfiltration via DNS tunneling if NetworkPolicies don't restrict egress DNS."
		},
		{
			tier: "advanced",
			question: "What is NodeLocal DNSCache and why is it deployed in large clusters?",
			options: [
				"A DNS cache running on each pod",
				"A DaemonSet running a DNS cache on each node that intercepts pod DNS queries locally, reducing CoreDNS load and connection tracking table pressure for UDP DNS traffic",
				"A cache for Kubernetes API responses",
				"A local copy of CoreDNS configuration"
			],
			correct: 1,
			explanation: "NodeLocal DNSCache runs on every node (as a DaemonSet) and caches DNS locally. This dramatically reduces CoreDNS pod load and eliminates conntrack table issues with UDP DNS at scale."
		},
		{
			tier: "advanced",
			question: "How does the Kubernetes DNS spec handle pods in a StatefulSet with a headless Service for stable hostnames?",
			options: [
				"StatefulSets don't get DNS names",
				"Each pod gets an A record at <pod-name>.<headless-service>.<namespace>.svc.cluster.local, enabling stable DNS even after restarts",
				"Only the first pod gets a stable DNS name",
				"Stable DNS requires an Ingress resource"
			],
			correct: 1,
			explanation: "postgres-0.postgres-headless.default.svc.cluster.local is stable — survives pod restarts. This is the foundational feature enabling database clients to maintain persistent connections to specific replicas."
		}
	]
},
	"2-3": {
	title: "nginx-ingress: routing rules and TLS termination",
	questions: [
		{
			tier: "beginner",
			question: "What is an Ingress resource in Kubernetes?",
			options: [
				"A firewall rule for incoming traffic",
				"An API object that manages external HTTP/HTTPS access to Services, providing routing rules, TLS termination, and load balancing",
				"A Service type for external access",
				"A NetworkPolicy for ingress traffic"
			],
			correct: 1,
			explanation: "An Ingress defines rules for routing external HTTP(S) traffic to internal Services. It requires an Ingress Controller (like nginx-ingress) to implement the rules."
		},
		{
			tier: "beginner",
			question: "What is an Ingress Controller?",
			options: [
				"A Kubernetes built-in component",
				"A pod/deployment that watches Ingress resources and configures a load balancer or proxy (e.g., nginx) to implement the routing rules",
				"A cloud load balancer",
				"A Service that controls ingress traffic"
			],
			correct: 1,
			explanation: "Ingress Controllers are not built-in. You must deploy one (nginx-ingress, Traefik, HAProxy). It watches Ingress objects and configures the underlying proxy."
		},
		{
			tier: "beginner",
			question: "What does this Ingress rule do: host: api.example.com, path: /, backend: service: api-service?",
			options: [
				"Routes all traffic to api-service",
				"Routes HTTP traffic with Host header 'api.example.com' and any path to api-service",
				"Creates a DNS record for api.example.com",
				"Exposes the service on port 80 externally"
			],
			correct: 1,
			explanation: "Ingress rules match on Host header and path. This routes all requests for api.example.com (any path) to the api-service backend."
		},
		{
			tier: "beginner",
			question: "How do you configure TLS termination in an Ingress resource?",
			options: [
				"Add https: true to the spec",
				"Add a tls section with the hostname and a secretName referencing a TLS Secret containing the certificate and key",
				"TLS is automatically configured by nginx-ingress",
				"Use a separate TLSIngress resource"
			],
			correct: 1,
			explanation: "The tls section specifies which Secret contains the TLS cert/key. nginx-ingress reads this Secret and configures SSL termination, serving HTTPS and optionally redirecting HTTP."
		},
		{
			tier: "beginner",
			question: "What format must a TLS Secret be in for nginx-ingress to use it?",
			options: [
				"kubernetes.io/tls type with tls.crt (PEM certificate) and tls.key (PEM private key) keys",
				"Opaque type with any key names",
				"kubernetes.io/dockerconfigjson type",
				"PKCS12 format in an Opaque Secret"
			],
			correct: 0,
			explanation: "TLS Secrets must be type kubernetes.io/tls with exactly tls.crt (full chain PEM) and tls.key (private key PEM) as keys."
		},
		{
			tier: "beginner",
			question: "What is the difference between pathType: Exact and pathType: Prefix?",
			options: [
				"Exact matches only the root path; Prefix matches everything",
				"Exact matches only requests with that exact path; Prefix matches the path and any sub-paths starting with it",
				"They are identical",
				"Prefix is for regex patterns"
			],
			correct: 1,
			explanation: "Exact: /api matches only /api. Prefix: /api matches /api, /api/, /api/users, etc. Use Prefix for most application routing."
		},
		{
			tier: "beginner",
			question: "How do you install nginx-ingress controller on minikube?",
			options: [
				"kubectl apply -f nginx-ingress.yaml",
				"minikube addons enable ingress",
				"helm install nginx-ingress",
				"It comes pre-installed"
			],
			correct: 1,
			explanation: "minikube has a built-in nginx-ingress addon. minikube addons enable ingress installs and configures it automatically for local development."
		},
		{
			tier: "intermediate",
			question: "What nginx-ingress annotation enables HTTP to HTTPS redirect?",
			options: [
				"nginx.ingress.kubernetes.io/force-ssl: true",
				"nginx.ingress.kubernetes.io/ssl-redirect: 'true'",
				"ingress.kubernetes.io/https-only: true",
				"ssl: enforce"
			],
			correct: 1,
			explanation: "The annotation nginx.ingress.kubernetes.io/ssl-redirect: 'true' configures nginx to redirect all HTTP requests to HTTPS. It's enabled by default when TLS is configured."
		},
		{
			tier: "intermediate",
			question: "How do you route traffic based on URL path in a single Ingress — /api to api-service and /static to static-service?",
			options: [
				"Use two separate Ingress resources",
				"Define multiple rules under the same host with different paths and backends",
				"Use a NetworkPolicy to split traffic",
				"This is not possible with nginx-ingress"
			],
			correct: 1,
			explanation: "A single Ingress can have multiple path rules under one host. Paths are evaluated in order; more specific paths should be listed first."
		},
		{
			tier: "intermediate",
			question: "What is the nginx-ingress annotation for custom connection timeouts?",
			options: [
				"nginx.ingress.kubernetes.io/timeout: 60",
				"nginx.ingress.kubernetes.io/proxy-connect-timeout, proxy-read-timeout, proxy-send-timeout",
				"ingress.kubernetes.io/timeout: 60s",
				"nginx.timeout: 60"
			],
			correct: 1,
			explanation: "nginx-ingress uses proxy-connect-timeout, proxy-read-timeout, and proxy-send-timeout annotations (in seconds) to configure nginx's upstream timeout settings."
		},
		{
			tier: "intermediate",
			question: "How does nginx-ingress handle WebSocket connections?",
			options: [
				"WebSockets are not supported",
				"WebSockets work automatically if you set the nginx.ingress.kubernetes.io/proxy-read-timeout and proxy-send-timeout to a high value to prevent timeout during long connections",
				"Requires a separate WebSocket Ingress",
				"WebSockets require the stream module annotation"
			],
			correct: 1,
			explanation: "nginx supports WebSocket upgrades automatically. You mainly need to set high timeouts (or 0) to prevent nginx from closing idle WebSocket connections."
		},
		{
			tier: "intermediate",
			question: "What is an IngressClass resource and why was it introduced?",
			options: [
				"A class of Ingress with different performance levels",
				"A resource that links an Ingress to a specific Ingress Controller implementation, allowing multiple controllers to coexist in one cluster",
				"A template for creating Ingress resources",
				"A cluster-level Ingress for all namespaces"
			],
			correct: 1,
			explanation: "IngressClass was introduced in K8s 1.18 to replace the kubernetes.io/ingress.class annotation. It allows multiple controllers (nginx + Traefik) to coexist, each handling different IngressClasses."
		},
		{
			tier: "intermediate",
			question: "What is the rewrite-target annotation used for in nginx-ingress?",
			options: [
				"Rewrites HTTP headers",
				"Rewrites the URL path before forwarding to the backend — e.g., strip a prefix like /api from the path before sending to the service",
				"Rewrites the response body",
				"Redirects to a different domain"
			],
			correct: 1,
			explanation: "rewrite-target lets you strip path prefixes. If your service expects /, but you route /api/* to it, rewrite-target: / strips /api from the upstream request."
		},
		{
			tier: "intermediate",
			question: "What are the risks of using a wildcard TLS certificate in nginx-ingress?",
			options: [
				"No risks — wildcard certs are simpler",
				"A single compromised wildcard cert exposes all subdomains; cert rotation affects all services; prefer per-service certs with cert-manager for isolation",
				"Wildcard certs don't work with nginx-ingress",
				"Wildcard certs require SNI which nginx doesn't support"
			],
			correct: 1,
			explanation: "Wildcard certs (*.example.com) simplify management but create a wide blast radius if compromised. cert-manager makes per-service certs easy to manage."
		},
		{
			tier: "advanced",
			question: "What is SNI (Server Name Indication) and why is it important for Ingress TLS?",
			options: [
				"A security header added to HTTP responses",
				"A TLS extension that sends the hostname before the TLS handshake, allowing a single IP to serve multiple TLS certificates for different hostnames",
				"A method for validating TLS certificates",
				"An nginx-specific feature for virtual hosting"
			],
			correct: 1,
			explanation: "SNI allows the client to specify the hostname in the ClientHello before the TLS handshake completes. nginx-ingress uses SNI to select the correct certificate for multi-tenant Ingress."
		},
		{
			tier: "advanced",
			question: "What is PROXY protocol in nginx-ingress and when is it needed?",
			options: [
				"A protocol for proxying HTTP requests",
				"A mechanism to pass client IP information when nginx-ingress is behind a cloud LB that doesn't preserve source IPs via HTTP headers; configures nginx to read the real IP from PROXY protocol header",
				"A protocol between pods",
				"Required for WebSocket connections"
			],
			correct: 1,
			explanation: "When AWS NLB or other LBs use PROXY protocol, nginx-ingress must be configured with use-proxy-protocol: 'true' to read client IPs from the protocol header instead of TCP source."
		},
		{
			tier: "advanced",
			question: "How does nginx-ingress rate limiting work with annotations?",
			options: [
				"Rate limiting requires an external WAF",
				"Annotations like nginx.ingress.kubernetes.io/limit-rps (requests/second) and limit-connections configure nginx's limit_req and limit_conn modules per Ingress rule",
				"Rate limiting is configured in the Service, not Ingress",
				"Only global rate limiting is supported"
			],
			correct: 1,
			explanation: "nginx-ingress rate limiting annotations configure nginx's native rate limiting. limit-rps sets requests/second per client IP. limit-burst-multiplier sets the burst size."
		},
		{
			tier: "advanced",
			question: "What is the ConfigMap used by nginx-ingress and what can you configure in it?",
			options: [
				"It stores TLS certificates",
				"The ingress-nginx/ingress-nginx-controller ConfigMap sets global nginx settings: worker processes, proxy buffer sizes, gzip, SSL protocols, timeouts, log formats",
				"It configures Ingress routing rules",
				"It stores nginx-ingress RBAC settings"
			],
			correct: 1,
			explanation: "The controller ConfigMap (usually ingress-nginx/ingress-nginx-controller) contains global nginx.conf settings that apply to all Ingresses. Per-Ingress settings use annotations."
		},
		{
			tier: "advanced",
			question: "What happens if two Ingress resources in different namespaces define the same hostname?",
			options: [
				"The newer one takes precedence",
				"The first one created wins; the second gets an 'already defined for Ingress X' error in controller logs and its rules are not applied",
				"Both work and traffic is split equally",
				"nginx-ingress merges the rules"
			],
			correct: 1,
			explanation: "nginx-ingress uses first-wins for hostname conflicts across namespaces. This is a security concern — namespace A shouldn't be able to steal hostname from namespace B. Use IngressClass or admission webhooks to prevent this."
		},
		{
			tier: "advanced",
			question: "How do you configure nginx-ingress for client certificate authentication (mutual TLS)?",
			options: [
				"It's not supported",
				"Use nginx.ingress.kubernetes.io/auth-tls-secret pointing to a CA certificate Secret, and auth-tls-verify-client: 'on'",
				"Set mutualTLS: true in the Ingress spec",
				"Configure it in the TLS Secret"
			],
			correct: 1,
			explanation: "nginx-ingress supports mTLS via auth-tls-secret (CA cert to verify client certs) and auth-tls-verify-client annotations. The client certificate CN can be passed to backends via headers."
		}
	]
},
	"2-4": {
	title: "NetworkPolicy: isolating namespace traffic",
	questions: [
		{
			tier: "beginner",
			question: "What is a Kubernetes NetworkPolicy?",
			options: [
				"A firewall rule applied at the node level",
				"A resource that specifies how pods are allowed to communicate with each other and external endpoints based on labels and namespaces",
				"A Service that controls network traffic",
				"A RBAC policy for network administrators"
			],
			correct: 1,
			explanation: "NetworkPolicy is a pod-level firewall specification. It defines allowed ingress and egress traffic using pod selectors, namespace selectors, and IP blocks."
		},
		{
			tier: "beginner",
			question: "What is the default pod networking behavior WITHOUT any NetworkPolicy applied?",
			options: [
				"All traffic is denied by default",
				"All pods can communicate with all other pods in the cluster (open by default)",
				"Only pods in the same namespace can communicate",
				"Only pods with matching labels can communicate"
			],
			correct: 1,
			explanation: "Kubernetes networking is open by default — all pods can reach all other pods. NetworkPolicies add restrictions. An empty cluster with no NetworkPolicies has flat, unrestricted networking."
		},
		{
			tier: "beginner",
			question: "Once a NetworkPolicy selects a pod, what is the default behavior for traffic not explicitly allowed?",
			options: [
				"Traffic is still allowed",
				"All traffic not explicitly allowed by the policy is denied (default deny for the selected direction)",
				"Traffic is logged but not blocked",
				"The policy only applies to new connections"
			],
			correct: 1,
			explanation: "NetworkPolicies are additive — but once a pod is selected by any ingress policy, all ingress not explicitly allowed is denied. Same for egress."
		},
		{
			tier: "beginner",
			question: "How do you apply a NetworkPolicy to specific pods?",
			options: [
				"By naming pods in the policy",
				"Using podSelector with matchLabels to select pods with specific labels",
				"By specifying the pod's IP address",
				"NetworkPolicies apply to all pods in a namespace"
			],
			correct: 1,
			explanation: "podSelector uses label selectors to target specific pods. An empty podSelector ({}) selects all pods in the namespace."
		},
		{
			tier: "beginner",
			question: "What NetworkPolicy policyType controls incoming traffic to pods?",
			options: [
				"Egress",
				"Ingress",
				"Both",
				"Inbound"
			],
			correct: 1,
			explanation: "Ingress policies control incoming traffic TO selected pods. Egress policies control outgoing traffic FROM selected pods."
		},
		{
			tier: "beginner",
			question: "Does a NetworkPolicy apply to traffic between containers in the same pod?",
			options: [
				"Yes, all traffic is filtered",
				"No, NetworkPolicies only apply to traffic between different pods",
				"Only if both containers have separate IPs",
				"Only for TCP traffic"
			],
			correct: 1,
			explanation: "NetworkPolicies operate at the pod level (pod IP). Containers within the same pod share a network namespace and communicate via localhost — NetworkPolicies don't filter this traffic."
		},
		{
			tier: "beginner",
			question: "What does a NetworkPolicy with an empty ingress rule `ingress: []` do?",
			options: [
				"Allows all ingress traffic",
				"Denies all ingress traffic to selected pods",
				"Has no effect",
				"Allows only same-namespace traffic"
			],
			correct: 1,
			explanation: "An empty ingress list with policyTypes: [Ingress] means no ingress is allowed — a complete deny. Compare with omitting policyTypes, which leaves ingress unrestricted."
		},
		{
			tier: "intermediate",
			question: "How do you allow only pods with label 'app=frontend' in the same namespace to reach pods with 'app=backend'?",
			options: [
				"Use a Service with label selector",
				"NetworkPolicy on backend pods with ingress from podSelector matchLabels: {app: frontend}",
				"NetworkPolicy on frontend pods with egress to app=backend",
				"Both A and B are required"
			],
			correct: 1,
			explanation: "Place the NetworkPolicy on the destination (backend) pods. The ingress rule specifies which source pods (app=frontend) are allowed. This is the ingress perspective."
		},
		{
			tier: "intermediate",
			question: "How do you allow pods in namespace 'monitoring' to scrape metrics from pods in namespace 'production'?",
			options: [
				"NetworkPolicy in production namespace with ingress from namespaceSelector matchLabels: {name: monitoring}",
				"NetworkPolicy in monitoring namespace with egress to production",
				"Both — you need policies on both ends",
				"Service mesh is required for cross-namespace policies"
			],
			correct: 0,
			explanation: "Add a NetworkPolicy in the production namespace allowing ingress from pods in namespaces matching the 'monitoring' label. The namespace must have the matching label (kubectl label namespace monitoring name=monitoring)."
		},
		{
			tier: "intermediate",
			question: "How do you create a 'default deny all' policy for a namespace?",
			options: [
				"kubectl deny namespace default --all",
				"Apply a NetworkPolicy with empty podSelector and empty ingress/egress rules with both policyTypes specified",
				"Set namespace.spec.networkPolicy: deny",
				"NetworkPolicies can't implement default deny"
			],
			correct: 1,
			explanation: "A policy selecting all pods ({}) with empty ingress: [] and egress: [] and policyTypes: [Ingress, Egress] creates a default deny. Then add allow policies for needed traffic."
		},
		{
			tier: "intermediate",
			question: "What is required on the NAMESPACE for a namespaceSelector in NetworkPolicy to work?",
			options: [
				"The namespace must have a NetworkPolicy too",
				"The namespace must have matching labels — kubectl label namespace <name> key=value",
				"Nothing — all namespaces can be referenced by name",
				"The namespace must be in the same cluster region"
			],
			correct: 1,
			explanation: "namespaceSelector matches on namespace labels, not names. You must label the namespace with the key-value you're selecting on. Starting K8s 1.22, kubernetes.io/metadata.name is auto-set."
		},
		{
			tier: "intermediate",
			question: "How do you allow DNS resolution (CoreDNS) when using default-deny egress?",
			options: [
				"DNS is automatically allowed",
				"Add an egress rule allowing UDP and TCP port 53 to the kube-system namespace or CoreDNS pod labels",
				"Use dnsPolicy: None to bypass the policy",
				"DNS traffic is not affected by NetworkPolicies"
			],
			correct: 1,
			explanation: "With default-deny egress, pods can't reach CoreDNS. You must explicitly allow egress on port 53 (UDP and TCP) to kube-dns pods. Forgetting this is a common mistake."
		},
		{
			tier: "intermediate",
			question: "What does a NetworkPolicy with both podSelector AND namespaceSelector in the same rule mean?",
			options: [
				"It means either condition can match (OR)",
				"It means both conditions must be true (AND) — pods matching the label AND in a namespace matching the namespace label",
				"It's invalid syntax",
				"podSelector takes precedence over namespaceSelector"
			],
			correct: 1,
			explanation: "When podSelector and namespaceSelector appear in the same rule block (under the same -), they're ANDed. Use separate items (two entries) for OR logic."
		},
		{
			tier: "intermediate",
			question: "Does a NetworkPolicy require a specific CNI plugin to work?",
			options: [
				"No, all CNI plugins support NetworkPolicy",
				"Yes, only CNI plugins that implement NetworkPolicy enforcement (Calico, Cilium, Weave Net) — flannel does NOT enforce NetworkPolicies",
				"Only the official Kubernetes network plugin supports it",
				"NetworkPolicies are enforced by kube-proxy, not CNI"
			],
			correct: 1,
			explanation: "NetworkPolicy is an API spec, but enforcement requires a compatible CNI. Flannel doesn't enforce them. Calico, Cilium, Weave Net do. Minikube uses Canal (Calico+Flannel) for enforcement."
		},
		{
			tier: "advanced",
			question: "What is the difference between Kubernetes NetworkPolicy and Cilium's CiliumNetworkPolicy?",
			options: [
				"They are identical",
				"CiliumNetworkPolicy extends standard NetworkPolicy with L7 rules (HTTP methods, paths, gRPC) and identity-based policies using Cilium's eBPF dataplane",
				"CiliumNetworkPolicy only works at L3/L4",
				"Standard NetworkPolicy is deprecated in favor of CiliumNetworkPolicy"
			],
			correct: 1,
			explanation: "Standard NetworkPolicy is L3/L4 only. Cilium's CiliumNetworkPolicy adds L7 HTTP policy (allow GET /api but deny POST /admin), DNS-based policies, and FQDN rules."
		},
		{
			tier: "advanced",
			question: "How would you allow a pod to reach any external IP EXCEPT a specific range (e.g., block access to a metadata service at 169.254.169.254)?",
			options: [
				"NetworkPolicies can't block specific IPs",
				"Egress rule with ipBlock CIDR 0.0.0.0/0 and except: [169.254.169.254/32]",
				"Use a NetworkPolicy to deny the specific IP separately",
				"Use an Egress Gateway for this"
			],
			correct: 1,
			explanation: "ipBlock supports except to carve out exclusions. This is the standard way to block cloud metadata services (169.254.169.254) while allowing general internet access."
		},
		{
			tier: "advanced",
			question: "What is the 'hairpin' traffic issue with NetworkPolicies and how does it manifest?",
			options: [
				"A bug in nginx-ingress",
				"When a pod sends traffic to its own Service ClusterIP, the traffic may be affected by NetworkPolicies if the pod's egress policies don't allow it to reach itself via the Service",
				"A routing loop in pod networking",
				"A CNI bug with iptables rules"
			],
			correct: 1,
			explanation: "Hairpin traffic (pod→Service→same pod) traverses iptables DNAT rules and then NetworkPolicy ingress rules. If the pod's own IP is blocked from its own ingress policy, self-traffic fails."
		},
		{
			tier: "advanced",
			question: "What are the limitations of Kubernetes NetworkPolicy for securing production microservices?",
			options: [
				"No limitations — NetworkPolicy is sufficient for all scenarios",
				"L3/L4 only (no HTTP path/method), no deny rules (only allow), no logging/observability, no dynamic hostnames — service mesh (Istio/Linkerd) or Cilium L7 policies are needed for comprehensive security",
				"NetworkPolicy can't handle more than 100 rules",
				"NetworkPolicy requires re-deploying pods to take effect"
			],
			correct: 1,
			explanation: "NetworkPolicy is a good baseline but lacks L7 visibility, logging, deny semantics, and dynamic hostname support. Service meshes fill these gaps for production zero-trust architectures."
		},
		{
			tier: "advanced",
			question: "How would you implement a 'three-tier' NetworkPolicy architecture for a Django app (frontend → Django → Postgres)?",
			options: [
				"Use one NetworkPolicy for all three tiers",
				"Three separate policies: frontend only allows egress to Django; Django allows ingress from frontend and egress to Postgres; Postgres allows ingress only from Django",
				"NetworkPolicies don't support multi-tier architectures",
				"Use a Service mesh instead of NetworkPolicies"
			],
			correct: 1,
			explanation: "Least-privilege networking: each tier's policy explicitly defines its allowed communication partners. Postgres gets no egress allowed. Django can't talk to the internet directly. Frontend can't bypass Django."
		},
		{
			tier: "advanced",
			question: "What is the performance impact of NetworkPolicies at scale (thousands of pods and policies)?",
			options: [
				"No performance impact",
				"Each pod addition triggers NetworkPolicy controller reconciliation and iptables/eBPF rule updates on all nodes; at large scale, Calico's Felix or Cilium's eBPF outperform iptables-based policies significantly",
				"NetworkPolicies only affect new connections, not existing ones",
				"Performance impact is only during policy creation"
			],
			correct: 1,
			explanation: "Large iptables rule sets (thousands of rules) cause O(n) packet traversal. Cilium's eBPF dataplane uses hash maps for O(1) lookup, making it significantly more scalable."
		}
	]
},
	"2-5": {
	title: "Boss: Expose app via Ingress with TLS cert via cert-manager",
	questions: [
		{
			tier: "beginner",
			question: "What is cert-manager?",
			options: [
				"A Kubernetes Secret for TLS certificates",
				"A Kubernetes controller that automates TLS certificate provisioning and renewal from CAs like Let's Encrypt",
				"A nginx-ingress plugin for TLS",
				"A cloud provider service for certificates"
			],
			correct: 1,
			explanation: "cert-manager is a Kubernetes-native certificate lifecycle manager. It watches Certificate resources, requests certs from ACME (Let's Encrypt) or other CAs, and stores them in Secrets."
		},
		{
			tier: "beginner",
			question: "What is a ClusterIssuer in cert-manager?",
			options: [
				"A namespace-scoped certificate issuer",
				"A cluster-wide certificate issuer that any Ingress or Certificate resource in any namespace can use",
				"A type of TLS certificate",
				"A Let's Encrypt account"
			],
			correct: 1,
			explanation: "ClusterIssuer is cluster-scoped and can be referenced from any namespace. Issuer is namespace-scoped. Use ClusterIssuer for shared Let's Encrypt configuration."
		},
		{
			tier: "beginner",
			question: "What annotation do you add to an Ingress to trigger automatic cert-manager certificate provisioning?",
			options: [
				"tls.enabled: true",
				"cert-manager.io/cluster-issuer: letsencrypt-prod",
				"nginx.ingress.kubernetes.io/ssl: auto",
				"kubernetes.io/tls-acme: true"
			],
			correct: 1,
			explanation: "The cert-manager.io/cluster-issuer (or cert-manager.io/issuer) annotation tells cert-manager to automatically provision a certificate for the TLS hosts listed in the Ingress."
		},
		{
			tier: "beginner",
			question: "What ACME challenge type does cert-manager use for HTTP-based domain validation?",
			options: [
				"DNS-01",
				"HTTP-01",
				"TLS-ALPN-01",
				"Email-01"
			],
			correct: 1,
			explanation: "HTTP-01 challenge involves cert-manager creating an Ingress/route for /.well-known/acme-challenge/<token> that Let's Encrypt can verify. Requires your domain to be publicly accessible on port 80."
		},
		{
			tier: "beginner",
			question: "What is the difference between Let's Encrypt staging and production servers?",
			options: [
				"Staging is free; production costs money",
				"Staging has higher rate limits for testing but issues untrusted certs; production issues trusted certs but has strict rate limits (5 certs/domain/week)",
				"Staging only issues 90-day certs; production issues 1-year certs",
				"There is no difference"
			],
			correct: 1,
			explanation: "Always test with staging first (ClusterIssuer pointing to acme-staging-v02.api.letsencrypt.org) to avoid hitting production rate limits. Production certs are browser-trusted; staging certs are not."
		},
		{
			tier: "beginner",
			question: "Where does cert-manager store issued TLS certificates?",
			options: [
				"In the Certificate resource status",
				"In a Kubernetes Secret of type kubernetes.io/tls in the same namespace as the Certificate/Ingress",
				"In the ClusterIssuer resource",
				"In a ConfigMap"
			],
			correct: 1,
			explanation: "cert-manager creates a Secret (type kubernetes.io/tls) with the specified secretName. nginx-ingress then reads this Secret to serve HTTPS."
		},
		{
			tier: "beginner",
			question: "What is an ACME challenge?",
			options: [
				"A test to verify cert-manager is installed",
				"A domain ownership verification mechanism where the CA (Let's Encrypt) verifies you control the domain before issuing a certificate",
				"A benchmark for TLS performance",
				"A type of certificate request format"
			],
			correct: 1,
			explanation: "ACME (Automated Certificate Management Environment) challenges prove domain ownership. HTTP-01 requires a token served at a known URL. DNS-01 requires a TXT record in DNS."
		},
		{
			tier: "intermediate",
			question: "What Kubernetes resources does cert-manager create during the HTTP-01 challenge process?",
			options: [
				"Only a Secret",
				"Certificate → CertificateRequest → Order → Challenge. Challenge creates a temporary Ingress and Service to serve the validation token",
				"Only an Ingress",
				"A Job that runs the ACME protocol"
			],
			correct: 1,
			explanation: "The full chain: Certificate triggers CertificateRequest, which creates an Order with the CA, which creates a Challenge. For HTTP-01, cert-manager creates a temporary Ingress to serve the ACME token."
		},
		{
			tier: "intermediate",
			question: "How do you debug a stuck cert-manager certificate issuance?",
			options: [
				"kubectl logs cert-manager only",
				"kubectl describe certificate, kubectl describe certificaterequest, kubectl describe challenge, and cert-manager controller logs",
				"Check nginx-ingress logs",
				"Restart cert-manager"
			],
			correct: 1,
			explanation: "Follow the resource chain: Certificate → CertificateRequest → Order → Challenge. Each has Events showing what went wrong. The Challenge resource shows the ACME response."
		},
		{
			tier: "intermediate",
			question: "What does the DNS-01 challenge require that HTTP-01 doesn't?",
			options: [
				"A public IP address",
				"DNS write access — cert-manager must create a TXT record in your DNS zone to prove domain ownership; required for wildcard certs and private clusters",
				"A running web server",
				"An email address"
			],
			correct: 1,
			explanation: "DNS-01 creates a TXT record at _acme-challenge.<domain>. It's the only way to get wildcard certs (*.example.com) and works for private clusters not accessible from the internet."
		},
		{
			tier: "intermediate",
			question: "How does cert-manager automatically renew certificates before expiry?",
			options: [
				"You must manually trigger renewal",
				"cert-manager watches certificate expiry and automatically renews when the cert is within renewBefore (default: 30 days) of expiry",
				"Let's Encrypt sends a renewal request",
				"Certificate renewal requires restarting cert-manager"
			],
			correct: 1,
			explanation: "cert-manager has a built-in renewal controller. It checks certificate expiry and triggers renewal when within renewBefore of expiry, ensuring certs never expire in production."
		},
		{
			tier: "intermediate",
			question: "What is the CertificateSigningRequest (CSR) flow vs cert-manager's Certificate resource?",
			options: [
				"They are the same thing",
				"cert-manager's Certificate is a higher-level CRD that handles the full lifecycle. K8s native CertificateSigningRequest is a lower-level API for cluster components, not typically used for application TLS",
				"CSR is for internal certs; Certificate is for external",
				"Certificate is deprecated in favor of CSR"
			],
			correct: 1,
			explanation: "cert-manager's Certificate CRD abstracts away ACME, CSRs, and renewals. K8s native CSR API is mainly used for kubelet/node certificates. Don't confuse them."
		},
		{
			tier: "intermediate",
			question: "How do you force cert-manager to re-issue a certificate?",
			options: [
				"Delete the Secret — cert-manager will recreate it",
				"kubectl delete secret <cert-secret> or add the cert-manager.io/issuer-name annotation change, or use cmctl renew",
				"Restart cert-manager controller",
				"Delete and recreate the Ingress"
			],
			correct: 0,
			explanation: "Deleting the TLS Secret triggers cert-manager to request a new certificate. Alternatively, use the cmctl CLI tool with cmctl renew for a clean approach."
		},
		{
			tier: "intermediate",
			question: "What happens if a Let's Encrypt certificate fails to renew and expires?",
			options: [
				"cert-manager automatically switches to a self-signed cert",
				"HTTPS stops working — browsers show 'Your connection is not private'. cert-manager continues retry attempts but traffic is broken until a new cert is issued",
				"The old cert stays valid for a grace period",
				"nginx-ingress switches to HTTP automatically"
			],
			correct: 1,
			explanation: "Expired certs cause browser TLS errors. cert-manager retries with backoff but doesn't fix itself instantly. Monitoring cert expiry (via Prometheus/cert-manager metrics) is critical."
		},
		{
			tier: "advanced",
			question: "What is the HTTP-01 challenge solver's requirement regarding the ingress-class?",
			options: [
				"No requirement",
				"The challenge solver Ingress must use the same IngressClass as your nginx-ingress controller; misconfigured solvers create Ingresses that no controller handles, causing challenge failure",
				"HTTP-01 doesn't create Ingress resources",
				"Challenge Ingresses use a separate IngressClass"
			],
			correct: 1,
			explanation: "cert-manager creates a temporary Ingress for HTTP-01. If your cluster uses a non-default IngressClass, configure the solver with class or ingressClassName to match your controller."
		},
		{
			tier: "advanced",
			question: "What are Let's Encrypt rate limits and how do they affect development workflows?",
			options: [
				"Let's Encrypt has no rate limits",
				"50 certs/domain/week (production), 5 duplicate certs/week. Exceed them and you're blocked for a week — use staging for testing to avoid burning production limits",
				"Rate limits only apply to wildcard certs",
				"Rate limits reset hourly"
			],
			correct: 1,
			explanation: "Production rate limits are strict. A broken CI/CD pipeline retrying cert issuance can exhaust weekly limits. Always develop with staging, switch to production only when the flow is verified."
		},
		{
			tier: "advanced",
			question: "How would you configure cert-manager to use AWS Route53 for DNS-01 challenges?",
			options: [
				"DNS-01 is not supported by cert-manager",
				"Configure a ClusterIssuer with dns01 solver type, route53 provider, and an IAM role (via IRSA in EKS) or access key with Route53 write permissions",
				"Use HTTP-01 for AWS Route53",
				"Configure it in the nginx-ingress ConfigMap"
			],
			correct: 1,
			explanation: "cert-manager supports Route53 DNS-01 via the route53 webhook solver. Use IRSA (IAM Roles for Service Accounts) in EKS for secure credential injection rather than static access keys."
		},
		{
			tier: "advanced",
			question: "What is cert-manager's 'approver' and when does it matter?",
			options: [
				"The admin who approves certificates manually",
				"Starting K8s 1.18, CertificateRequests require approval from an approver controller before being signed. cert-manager has a built-in approver but it can be disabled for custom approval workflows (OPA, manual approval)",
				"The Let's Encrypt account holder",
				"The nginx-ingress certificate handler"
			],
			correct: 1,
			explanation: "cert-manager's approver-policy controller enables fine-grained certificate approval rules. Organizations can enforce policies (max cert duration, allowed domains) before certs are signed."
		},
		{
			tier: "advanced",
			question: "What is the security concern with wildcard certificates from Let's Encrypt and how should they be handled?",
			options: [
				"Let's Encrypt doesn't issue wildcards",
				"Wildcard certs (*.example.com) require DNS-01 challenge (needs DNS write access) and expose all subdomains if compromised — store the cert Secret with strict RBAC and rotate regularly",
				"Wildcard certs are more secure than single-domain certs",
				"Wildcard certs work with HTTP-01 challenge"
			],
			correct: 1,
			explanation: "Wildcard certs expand the blast radius of a certificate compromise. The DNS write access required for DNS-01 is also a security concern. Use per-subdomain certs where feasible."
		},
		{
			tier: "advanced",
			question: "How would you monitor TLS certificate expiry in Kubernetes and alert before expiration?",
			options: [
				"Check manually every month",
				"Use cert-manager's Prometheus metrics (certmanager_certificate_expiration_timestamp_seconds), set alerts for certs expiring within 14 days, or use x509-certificate-exporter DaemonSet",
				"Rely on cert-manager's auto-renewal alone",
				"Use Let's Encrypt's expiry notification emails"
			],
			correct: 1,
			explanation: "cert-manager exposes Prometheus metrics including expiry timestamps. A Prometheus alert rule triggering 14 days before expiry gives time to investigate renewal failures before users are impacted."
		}
	]
},
	"3-1": {
	title: "Helm fundamentals: charts, values, templates, releases",
	questions: [
		{
			tier: "beginner",
			question: "What is Helm?",
			options: [
				"A Kubernetes cluster management tool",
				"A package manager for Kubernetes that allows you to define, install, and upgrade applications as reusable packages called charts",
				"A monitoring tool for Kubernetes",
				"A deployment strategy"
			],
			correct: 1,
			explanation: "Helm is the Kubernetes package manager. Charts bundle all K8s manifests, with templating for customization. helm install deploys a chart as a Release."
		},
		{
			tier: "beginner",
			question: "What is a Helm Chart?",
			options: [
				"A Kubernetes Deployment manifest",
				"A collection of files describing a related set of Kubernetes resources, including templates, default values, and metadata",
				"A visual dashboard for Kubernetes",
				"A Helm configuration file"
			],
			correct: 1,
			explanation: "A chart is a directory structure with Chart.yaml (metadata), values.yaml (defaults), and templates/ (YAML templates with Go templating). It's like a Kubernetes app package."
		},
		{
			tier: "beginner",
			question: "What is a Helm Release?",
			options: [
				"A new version of Helm itself",
				"A specific deployment of a chart into a Kubernetes cluster with a given set of values",
				"A tagged version of a chart",
				"A Helm upgrade command"
			],
			correct: 1,
			explanation: "A Release is an instance of a chart running in a cluster. You can install the same chart multiple times with different names (e.g., django-dev and django-prod), creating two separate Releases."
		},
		{
			tier: "beginner",
			question: "What file contains the default configuration values for a Helm chart?",
			options: [
				"Chart.yaml",
				"config.yaml",
				"values.yaml",
				"defaults.yaml"
			],
			correct: 2,
			explanation: "values.yaml holds the default values for all template variables. Users can override these at install time with --set or -f custom-values.yaml."
		},
		{
			tier: "beginner",
			question: "What does `helm install my-release ./my-chart` do?",
			options: [
				"Creates a new chart",
				"Deploys the chart from ./my-chart directory as a Release named 'my-release' using default values",
				"Updates an existing release",
				"Validates the chart without deploying"
			],
			correct: 1,
			explanation: "helm install <release-name> <chart> deploys the chart. The release name becomes the name prefix for K8s resources and the identifier for future upgrades/rollbacks."
		},
		{
			tier: "beginner",
			question: "What is the purpose of Chart.yaml?",
			options: [
				"Stores the Kubernetes manifests",
				"Contains chart metadata: name, version, description, API version, and dependencies",
				"Defines default configuration values",
				"Contains the chart's test cases"
			],
			correct: 1,
			explanation: "Chart.yaml is the chart's manifest/identity file. Required fields: apiVersion (v2 for Helm 3), name, and version (semver). Optional: description, dependencies, maintainers."
		},
		{
			tier: "beginner",
			question: "What command lists all installed Helm releases in the current namespace?",
			options: [
				"helm list",
				"helm get releases",
				"kubectl get releases",
				"helm status --all"
			],
			correct: 0,
			explanation: "helm list shows all releases in the current namespace. Add -A for all namespaces, -d for deleted releases."
		},
		{
			tier: "intermediate",
			question: "How do you override a value in values.yaml at install time?",
			options: [
				"Edit values.yaml directly",
				"Use helm install --set key=value or -f override-values.yaml",
				"Edit the chart templates",
				"Use kubectl override"
			],
			correct: 1,
			explanation: "--set key=value overrides individual values; -f custom-values.yaml merges a file's values. Both can be combined. Later --set takes precedence over -f files."
		},
		{
			tier: "intermediate",
			question: "What is the difference between `helm install` and `helm upgrade --install`?",
			options: [
				"They are identical",
				"helm install fails if the release exists; helm upgrade --install installs if new or upgrades if exists — idempotent, preferred for CI/CD",
				"helm upgrade --install is slower",
				"helm install supports more flags"
			],
			correct: 1,
			explanation: "In CI/CD, you don't always know if a release exists. helm upgrade --install handles both cases atomically, making pipelines idempotent."
		},
		{
			tier: "intermediate",
			question: "What does `helm template ./my-chart` do and why is it useful?",
			options: [
				"Creates a chart from a template",
				"Renders the chart templates locally without deploying, outputting the final Kubernetes YAML",
				"Validates the chart for errors",
				"Creates a template from a running release"
			],
			correct: 1,
			explanation: "helm template renders templates to YAML without deploying. Invaluable for debugging template rendering issues, generating static manifests, and testing in CI."
		},
		{
			tier: "intermediate",
			question: "Where does Helm store release state in Kubernetes?",
			options: [
				"In a file on the Helm client machine",
				"As Secrets (default) in the release's namespace — one Secret per revision",
				"In etcd directly",
				"In a Helm-specific database"
			],
			correct: 1,
			explanation: "Helm 3 stores release metadata as Secrets (type helm.sh/release.v1) in the release namespace. Each revision creates a new Secret. This enables rollbacks and release history."
		},
		{
			tier: "intermediate",
			question: "What is `helm diff` and why is it valuable?",
			options: [
				"A built-in command showing changes between chart versions",
				"A plugin (helm diff upgrade) that shows a diff of what changes would be applied before actually upgrading — like terraform plan for Helm",
				"Shows differences between two charts",
				"Compares two release versions in the cluster"
			],
			correct: 1,
			explanation: "The helm-diff plugin shows exactly what Kubernetes resources would change before you run helm upgrade. Essential for safe production deployments and code review."
		},
		{
			tier: "intermediate",
			question: "What does `helm rollback my-release 2` do?",
			options: [
				"Rolls back to 2 releases before the current",
				"Rolls back the release to revision 2 specifically",
				"Rolls back the last 2 changes",
				"Downgrade Helm to version 2"
			],
			correct: 1,
			explanation: "helm rollback <release> <revision> reverts to a specific historical revision. Use helm history <release> to see all revisions and their status."
		},
		{
			tier: "intermediate",
			question: "What is the `helm lint` command?",
			options: [
				"Formats the chart YAML",
				"Validates the chart structure and templates for errors and best practices",
				"Removes unused values",
				"Tests the chart against a live cluster"
			],
			correct: 1,
			explanation: "helm lint examines a chart for issues — syntax errors, missing required fields, template rendering problems, and best practice violations. Run it in CI before pushing charts."
		},
		{
			tier: "advanced",
			question: "What is Helm's '--atomic' flag and when should you use it?",
			options: [
				"Makes the install non-interruptible",
				"If the install/upgrade fails or times out, automatically rolls back to the previous successful release — critical for production deployments",
				"Locks the values.yaml file",
				"Deploys all chart dependencies atomically"
			],
			correct: 1,
			explanation: "--atomic enables automatic rollback on failure combined with --wait. If the new release doesn't become healthy within --timeout, Helm automatically rolls back."
		},
		{
			tier: "advanced",
			question: "What is a Helm library chart and how does it differ from an application chart?",
			options: [
				"A chart that installs Helm itself",
				"A chart with no deployable resources — only named templates (helpers) that other charts can import and reuse via the 'type: library' Chart.yaml field",
				"A chart for database applications",
				"A read-only chart you can't modify"
			],
			correct: 1,
			explanation: "Library charts contain only _helpers.tpl-style named templates. They can't be installed directly but provide shared template functions, reducing duplication across related charts."
		},
		{
			tier: "advanced",
			question: "What is Helm's Chart Museum and when would you use it?",
			options: [
				"A visual dashboard for charts",
				"An open-source Helm chart repository server you can self-host — used when you need a private chart repository within your organization",
				"Helm's official chart storage backend",
				"A chart linting service"
			],
			correct: 1,
			explanation: "ChartMuseum is a self-hosted chart repository. Use it when you can't or don't want to use OCI registries or GitHub Pages, and need a private artifact store for internal charts."
		},
		{
			tier: "advanced",
			question: "What is the OCI (Open Container Initiative) registry support in Helm 3 and why is it significant?",
			options: [
				"OCI support allows running Helm as a container",
				"Helm 3.8+ supports storing and distributing charts as OCI artifacts in container registries (ECR, GCR, ACR) — no need for a separate chart repository",
				"OCI is required for Helm 3 to work",
				"OCI support is for signing charts only"
			],
			correct: 1,
			explanation: "helm push/pull to OCI registries (helm push mychart oci://registry.example.com/charts) eliminates the need for separate Chart Museum infrastructure. ECR, GCR, Harbor all support Helm OCI charts."
		},
		{
			tier: "advanced",
			question: "What happens to Helm-managed resources if you directly modify them with kubectl?",
			options: [
				"Helm automatically reverts the changes",
				"The changes persist until the next helm upgrade, which will overwrite them with the chart's desired state — Helm doesn't watch for drift like Flux does",
				"kubectl changes are tracked in Helm history",
				"Helm blocks direct kubectl modifications"
			],
			correct: 1,
			explanation: "Helm is not a continuous reconciliation system (that's GitOps/Flux). Direct kubectl changes are overwritten on the next helm upgrade. Use helm upgrade or GitOps to make changes properly."
		},
		{
			tier: "advanced",
			question: "What is the '--set-file' and '--set-json' Helm flags used for?",
			options: [
				"Setting multiple values from a file",
				"--set-file reads a value from a file (e.g., for certificates or scripts); --set-json parses a JSON string as a complex value (arrays/objects) where --set syntax would be cumbersome",
				"Setting encrypted values",
				"Setting environment-specific values"
			],
			correct: 1,
			explanation: "--set-file is perfect for injecting file contents (TLS certs, config files) as values. --set-json handles complex structures like nested objects and arrays more cleanly than dot notation."
		}
	]
},
	"3-2": {
	title: "Go templating: conditionals, loops, named templates",
	questions: [
		{
			tier: "beginner",
			question: "What syntax is used for actions (code blocks) in Go templates used by Helm?",
			options: [
				"{{ ... }} for output and {% ... %} for control flow",
				"{{ ... }} for both output and control flow actions",
				"<% ... %> like ERB templates",
				"# ... # for actions"
			],
			correct: 1,
			explanation: "Go templates use {{ }} for everything — variable output, conditionals, loops, and function calls. The surrounding whitespace can be controlled with {{- and -}}."
		},
		{
			tier: "beginner",
			question: "How do you output a value from values.yaml in a Helm template?",
			options: [
				"{$ values.replicaCount }",
				"{{ .Values.replicaCount }}",
				"{{ values.replicaCount }}",
				"${replicaCount}"
			],
			correct: 1,
			explanation: ".Values refers to the merged values (values.yaml + overrides). Use dot notation for nested keys: {{ .Values.image.tag }}."
		},
		{
			tier: "beginner",
			question: "What does `{{- ` (with a dash) do in Go templates?",
			options: [
				"Outputs a dash character",
				"Trims whitespace (including newlines) to the LEFT of the action",
				"Marks a comment",
				"Starts a raw string block"
			],
			correct: 1,
			explanation: "The dash trims whitespace. {{- trims left (preceding whitespace/newlines), -}} trims right (following whitespace/newlines). Essential for clean YAML output without extra blank lines."
		},
		{
			tier: "beginner",
			question: "How do you write a conditional in a Helm template?",
			options: [
				"{% if .Values.enabled %}...{% endif %}",
				"{{ if .Values.enabled }}...{{ end }}",
				"#if enabled#...#endif#",
				"{{ .Values.enabled ? 'yes' : 'no' }}"
			],
			correct: 1,
			explanation: "Go template if/else/end: {{ if .Values.enabled }}content{{ else }}other{{ end }}. The condition is falsy for false, nil, 0, empty string, empty slice."
		},
		{
			tier: "beginner",
			question: "How do you iterate over a list in values.yaml in a Helm template?",
			options: [
				"{{ for item in .Values.items }}...{{ endfor }}",
				"{{ range .Values.items }}{{ . }}{{ end }}",
				"{{ each .Values.items }}...{{ /each }}",
				"{{ loop .Values.items }}"
			],
			correct: 1,
			explanation: "The range action iterates over slices and maps. Inside range, '.' refers to the current item. For key-value maps: {{ range $key, $value := .Values.labels }}."
		},
		{
			tier: "beginner",
			question: "What is the `_helpers.tpl` file in a Helm chart?",
			options: [
				"A file with helper scripts",
				"A file containing named templates (define/template actions) that can be reused across all chart templates",
				"A file with test helpers",
				"A configuration override file"
			],
			correct: 1,
			explanation: "_helpers.tpl contains {{ define \"myapp.labels\" }} blocks. Files prefixed with _ are not rendered as K8s manifests but are available for other templates to include."
		},
		{
			tier: "beginner",
			question: "How do you include a named template from _helpers.tpl in another template?",
			options: [
				"{{ use \"myapp.labels\" . }}",
				"{{ include \"myapp.labels\" . }}",
				"{{ import \"myapp.labels\" }}",
				"{{ render \"myapp.labels\" . }}"
			],
			correct: 1,
			explanation: "{{ include \"template-name\" . }} includes the named template passing the current context (.). Use include (not template) so you can pipe the result to functions like indent."
		},
		{
			tier: "intermediate",
			question: "What is the difference between `include` and `template` in Helm?",
			options: [
				"They are identical",
				"include returns a string that can be piped to functions (like indent); template renders in place and cannot be piped",
				"template is for helpers.tpl only; include is for all files",
				"include is deprecated in Helm 3"
			],
			correct: 1,
			explanation: "This is a critical distinction. {{ include \"name\" . | indent 4 }} works because include returns a string. {{ template \"name\" . }} can't be piped — use include when piping is needed."
		},
		{
			tier: "intermediate",
			question: "What does `{{ .Values.replicas | default 3 }}` do?",
			options: [
				"Multiplies replicas by 3",
				"Returns .Values.replicas if set; otherwise returns 3",
				"Sets the default to 3 if replicas is above 3",
				"Fails if replicas is not set"
			],
			correct: 1,
			explanation: "The default function returns the value if non-empty, or the specified default. This prevents empty values from being templated into YAML, which would cause errors."
		},
		{
			tier: "intermediate",
			question: "How do you define a named template in _helpers.tpl?",
			options: [
				"func myapp.labels() { ... }",
				"{{- define \"myapp.labels\" -}}...{{- end }}",
				"template \"myapp.labels\" { ... }",
				"{{ named \"myapp.labels\" }}...{{ /named }}"
			],
			correct: 1,
			explanation: "{{ define \"name\" }} ... {{ end }} defines a reusable named template. Conventionally named <chart>.<function> (e.g., myapp.labels, myapp.selectorLabels)."
		},
		{
			tier: "intermediate",
			question: "How do you access a range loop's index and value simultaneously?",
			options: [
				"{{ range $i, .Values.list }}",
				"{{ range $index, $item := .Values.list }}",
				"{{ range .Values.list | withIndex }}",
				"{{ enumerate .Values.list }}"
			],
			correct: 1,
			explanation: "{{ range $index, $item := .Values.list }} gives both the index and value. For maps: {{ range $key, $value := .Values.labels }} iterates key-value pairs."
		},
		{
			tier: "intermediate",
			question: "What does `{{ toYaml .Values.resources | nindent 12 }}` do?",
			options: [
				"Converts resources to JSON",
				"Serializes the resources value to YAML format and indents each line by 12 spaces (with a leading newline) — essential for embedding nested structures",
				"Validates YAML syntax",
				"Converts the value to a YAML comment"
			],
			correct: 1,
			explanation: "toYaml converts a Go map to YAML. nindent adds a newline then indents — critical when embedding nested YAML blocks like resources, env, or volumes in templates."
		},
		{
			tier: "intermediate",
			question: "How do you prevent a template from being rendered as a Kubernetes resource?",
			options: [
				"Add skip: true to the file",
				"Prefix the filename with an underscore (e.g., _helpers.tpl) — Helm ignores files starting with _",
				"Add a Helm comment at the top",
				"Move it to a special directory"
			],
			correct: 1,
			explanation: "Files starting with _ or . are not rendered as manifests. _helpers.tpl is the convention for shared templates. NOTES.txt is another special file (installation notes)."
		},
		{
			tier: "intermediate",
			question: "What does `required` function do in Helm templates?",
			options: [
				"Makes a Kubernetes resource required",
				"Fails the template rendering with a custom error message if the value is empty — enforces mandatory values",
				"Makes the chart a required dependency",
				"Validates the value against a schema"
			],
			correct: 1,
			explanation: "{{ required \"Error: image.tag is required\" .Values.image.tag }} fails helm install with your message if the value isn't set. Better than silently deploying with empty values."
		},
		{
			tier: "advanced",
			question: "What is the `$` variable in Helm templates and when is it necessary?",
			options: [
				"The current namespace",
				"The root context — use $. when inside a range or with block where '.' has changed to the current item, but you need to access the original root values",
				"The chart version",
				"A wildcard matcher"
			],
			correct: 1,
			explanation: "Inside range, '.' is the current item. To access .Values or .Release from within a range block, use $.Values and $.Release. $ always references the root context."
		},
		{
			tier: "advanced",
			question: "How do you create a lookup function call in Helm templates and what is its risk?",
			options: [
				"lookup() function doesn't exist in Helm",
				"{{ lookup \"v1\" \"ConfigMap\" \"default\" \"my-config\" }} queries the live cluster during template rendering — risky because helm template and CI environments may not have cluster access",
				"lookup() is only for testing",
				"lookup() queries values.yaml not the cluster"
			],
			correct: 1,
			explanation: "lookup() queries the live Kubernetes API during rendering. It enables conditional logic based on existing resources but breaks in offline scenarios (helm template, CI without cluster access)."
		},
		{
			tier: "advanced",
			question: "What is the `tpl` function in Helm and why is it powerful but dangerous?",
			options: [
				"Runs template files",
				"{{ tpl .Values.someString . }} renders a string as a Go template — powerful for dynamic values but dangerous because user-provided values.yaml can inject arbitrary template code",
				"Validates template syntax",
				"A shorthand for include"
			],
			correct: 1,
			explanation: "tpl renders strings as templates at runtime. Useful for dynamic config but allows template injection if untrusted values are passed through tpl — a security concern in multi-tenant scenarios."
		},
		{
			tier: "advanced",
			question: "What is Helm's values schema validation (values.schema.json) and what problem does it solve?",
			options: [
				"Validates Kubernetes resource schemas",
				"A JSON Schema file in the chart root that validates values.yaml structure — catches type errors, missing required fields, and invalid values BEFORE templates are rendered",
				"Validates the rendered YAML against K8s API",
				"A schema for Chart.yaml validation"
			],
			correct: 1,
			explanation: "values.schema.json validates user-provided values against a JSON Schema before rendering. Catches 'replicaCount: \"three\"' (string not int) and missing required fields with clear error messages."
		},
		{
			tier: "advanced",
			question: "How do you implement a Helm helper that generates standard labels across all resources in a chart?",
			options: [
				"Copy-paste labels into each template",
				"Define {{ define \"myapp.labels\" }} in _helpers.tpl with app.kubernetes.io/* labels using .Release.Name and .Chart.Name, then include it in every resource",
				"Use a global labels ConfigMap",
				"Apply labels with kubectl label after install"
			],
			correct: 1,
			explanation: "Canonical pattern: define myapp.labels and myapp.selectorLabels in _helpers.tpl with recommended labels (app.kubernetes.io/name, instance, version, etc.) and include in every resource."
		},
		{
			tier: "advanced",
			question: "What is the difference between `nindent` and `indent` in Helm templates?",
			options: [
				"They are identical",
				"nindent adds a leading newline before indenting; indent does not — nindent is correct when embedding after a YAML key (to avoid inline output)",
				"indent preserves existing indentation; nindent does not",
				"nindent is for nested templates only"
			],
			correct: 1,
			explanation: "{{ toYaml .Values.resources | nindent 12 }} correctly puts the YAML on a new line with 12-space indent. Without the leading newline from nindent, the first line would be on the same line as the YAML key."
		}
	]
},
	"3-3": {
	title: "Values override: defaults vs environment-specific overrides",
	questions: [
		{
			tier: "beginner",
			question: "What is the values precedence order in Helm?",
			options: [
				"values.yaml always wins",
				"--set flags > -f override files > chart's values.yaml > parent chart values (lowest priority)",
				"Last specified file always wins",
				"Alphabetical order of file names"
			],
			correct: 1,
			explanation: "Later -f files override earlier ones; --set overrides all files; values.yaml is the default baseline. This enables environment-specific overrides without modifying the base chart."
		},
		{
			tier: "beginner",
			question: "How do you apply a custom values file when installing a chart?",
			options: [
				"helm install --values=custom.yaml",
				"helm install -f custom-values.yaml my-release ./my-chart",
				"helm install --override custom.yaml",
				"helm install --env custom.yaml"
			],
			correct: 1,
			explanation: "-f (or --values) specifies additional values files. Multiple -f flags are merged in order: helm install -f base.yaml -f prod.yaml (prod.yaml overrides base.yaml)."
		},
		{
			tier: "beginner",
			question: "What does `helm install --set image.tag=v2.1.0` do?",
			options: [
				"Sets the Helm version to 2.1.0",
				"Overrides the image.tag key in values.yaml with 'v2.1.0' for this install",
				"Creates a new image tag in Docker",
				"Sets a global cluster variable"
			],
			correct: 1,
			explanation: "--set uses dot notation for nested keys. image.tag maps to values.yaml's image: { tag: } structure. Use --set-string to force string type (prevents '1.0' becoming a float)."
		},
		{
			tier: "beginner",
			question: "What is a common pattern for managing multiple environments (dev/staging/prod) with Helm?",
			options: [
				"Create a separate chart per environment",
				"Have one chart with a base values.yaml and environment-specific override files (values-dev.yaml, values-prod.yaml)",
				"Use separate Kubernetes namespaces only",
				"Hardcode environment values in templates"
			],
			correct: 1,
			explanation: "One chart + multiple values files is the idiomatic Helm pattern. helm install -f values.yaml -f values-prod.yaml keeps environment differences explicit and auditable."
		},
		{
			tier: "beginner",
			question: "How do you set a nested value with --set?",
			options: [
				"--set 'image{tag}=v1'",
				"--set image.tag=v1 (dot notation for nesting)",
				"--set image[tag]=v1",
				"--set image::tag=v1"
			],
			correct: 1,
			explanation: "Dot notation: --set image.tag=v1 maps to image.tag in values.yaml. For deeper nesting: --set a.b.c=value. Use --set-string to force string types."
		},
		{
			tier: "beginner",
			question: "What does the `null` value do when set in a values override file?",
			options: [
				"Nothing — null is ignored",
				"Removes/unsets the key, effectively deleting a default value from values.yaml when merging",
				"Sets the value to the string 'null'",
				"Causes a template error"
			],
			correct: 1,
			explanation: "Setting a value to null in an override file removes it. Useful for disabling default resources — e.g., setting resources: null to remove default resource limits."
		},
		{
			tier: "beginner",
			question: "How do you set multiple values with --set in one command?",
			options: [
				"--set key1=val1 --set key2=val2 (multiple flags)",
				"--set key1=val1,key2=val2 (comma separated)",
				"Both A and B work",
				"--set 'key1=val1 key2=val2' (space separated)"
			],
			correct: 2,
			explanation: "Both work. Multiple --set flags and comma separation (--set a=1,b=2) are equivalent. Avoid comma syntax for values containing commas."
		},
		{
			tier: "intermediate",
			question: "What is the recommended approach for storing environment-specific secrets in Helm values?",
			options: [
				"Store them in values-prod.yaml in the Git repository",
				"Use helm-secrets plugin (encrypts with SOPS/age/vault) or reference K8s Secrets externally — never store plain secrets in values files committed to Git",
				"Use Kubernetes Secrets directly in values.yaml",
				"Base64 encode them in values.yaml"
			],
			correct: 1,
			explanation: "Plain secrets in Git = security incident. helm-secrets encrypts values files at rest. Alternatively, reference Secret names (not values) in Helm and manage secrets separately (External Secrets Operator)."
		},
		{
			tier: "intermediate",
			question: "How does Helm merge map values when overriding? Does it deep-merge or replace?",
			options: [
				"Deep-merge always",
				"Helm deep-merges maps by default. To completely replace a map, use --set key=null first or use a special annotation",
				"Replace always — override file wins entirely",
				"It depends on the data type"
			],
			correct: 0,
			explanation: "Helm deep-merges maps. If values.yaml has image: {tag: v1, repo: myrepo} and you override with tag: v2, the result is {tag: v2, repo: myrepo} — repo is preserved."
		},
		{
			tier: "intermediate",
			question: "How do you completely replace a list (array) in a values override?",
			options: [
				"Lists are automatically replaced when overriding",
				"Helm replaces lists entirely — if you override any list value, the entire list from the override file is used, not merged",
				"Use --set-list flag",
				"Lists cannot be overridden in Helm"
			],
			correct: 1,
			explanation: "Lists (arrays) are replaced, not merged. Override files: if the key contains a list, the entire list from the override replaces the default. This differs from maps (deep-merged)."
		},
		{
			tier: "intermediate",
			question: "What is `helm show values ./my-chart` used for?",
			options: [
				"Shows the rendered templates",
				"Displays the chart's default values.yaml content — useful before installing to understand what can be configured",
				"Shows the current release values",
				"Shows differences between two values files"
			],
			correct: 1,
			explanation: "helm show values helps you understand a chart's configurable surface before installing. Combine with helm show chart for metadata and helm show readme for documentation."
		},
		{
			tier: "intermediate",
			question: "How do you retrieve the values used for a currently deployed release?",
			options: [
				"helm get values my-release",
				"kubectl get secret helm-my-release -o yaml",
				"helm history my-release",
				"helm status my-release --values"
			],
			correct: 0,
			explanation: "helm get values my-release shows the user-supplied values for the release. Add --revision N for historical values. Add --all to include computed defaults."
		},
		{
			tier: "intermediate",
			question: "What happens when you run `helm upgrade my-release ./chart` without `-f` or `--set`?",
			options: [
				"Helm reuses the previously deployed values",
				"Helm uses only the chart's default values.yaml, losing any previously supplied override values",
				"The upgrade fails without values",
				"Helm prompts for values interactively"
			],
			correct: 1,
			explanation: "This is a common mistake! Without --reuse-values or re-specifying -f/--set, helm upgrade uses only defaults. Always use --reuse-values or re-supply all values in CI."
		},
		{
			tier: "intermediate",
			question: "What does the `--reuse-values` flag do in `helm upgrade`?",
			options: [
				"Reuses the chart from the previous install",
				"Reuses the user-supplied values from the previous release — prevents accidentally resetting to defaults on upgrade",
				"Reuses the Kubernetes resources",
				"Reuses the release name"
			],
			correct: 1,
			explanation: "--reuse-values merges previous user values with any new --set flags. Use it when you want to preserve previous overrides. Avoid it in GitOps where values should be fully declarative."
		},
		{
			tier: "advanced",
			question: "What is the tradeoff between using many --set flags vs a values file in CI/CD pipelines?",
			options: [
				"No tradeoff — they are equivalent",
				"--set flags are hard to audit, version control, and review in PRs; a committed values-prod.yaml is visible, diff-able, and part of the GitOps workflow",
				"--set is more secure than values files",
				"Values files are harder to update in CI"
			],
			correct: 1,
			explanation: "GitOps principle: all config in Git. Values files committed to the repo enable PR review, history, and diff. --set flags in CI scripts are harder to track and review."
		},
		{
			tier: "advanced",
			question: "How do you handle a Helm values hierarchy for a complex org with global defaults, team defaults, and app-specific values?",
			options: [
				"Use one values file and comments",
				"Chain multiple -f flags: helm install -f global.yaml -f team.yaml -f app.yaml — each file overrides the previous, creating a layered config hierarchy",
				"Use Helm subcharts for each level",
				"This requires Kustomize, not Helm"
			],
			correct: 1,
			explanation: "Multiple -f files are merged in order. Global/org values → team values → app-specific values. This mirrors how OPA/Kustomize hierarchies work and keeps concerns separated."
		},
		{
			tier: "advanced",
			question: "What is SOPS and how does it integrate with Helm for secret management?",
			options: [
				"SOPS is a Kubernetes Secret type",
				"SOPS (Secrets OPerationS) by Mozilla encrypts files at rest using age/GPG/KMS. helm-secrets plugin integrates SOPS so encrypted values files are decrypted at helm install/upgrade time",
				"SOPS is a Helm plugin for secret generation",
				"SOPS syncs secrets from Vault to Kubernetes"
			],
			correct: 1,
			explanation: "SOPS encrypts individual values (not the whole file) using cloud KMS or age keys. helm-secrets decrypts on the fly. This enables encrypted secrets.yaml in Git without exposing plaintext."
		},
		{
			tier: "advanced",
			question: "How can you validate that override values match expected types before deploying?",
			options: [
				"There is no way to validate types in Helm",
				"Add a values.schema.json with type definitions — Helm validates all provided values against the schema before rendering templates, catching type mismatches early",
				"Use helm lint --strict",
				"Type validation requires custom admission webhooks"
			],
			correct: 1,
			explanation: "values.schema.json uses JSON Schema to define types, required fields, and constraints. Run helm install or helm lint and schema violations are reported before any resources are created."
		},
		{
			tier: "advanced",
			question: "What are 'global values' in Helm and when are they useful?",
			options: [
				"Values accessible from all namespaces",
				"Values under the 'global' key in values.yaml that are accessible by subcharts as well as the parent chart — enables sharing common config across chart dependencies",
				"Default values that can't be overridden",
				"Cluster-wide Helm configuration"
			],
			correct: 1,
			explanation: "global: key is special in Helm. Subcharts access parent global values. Useful for sharing registry URL, image pull secrets, or environment names across parent and child charts."
		},
		{
			tier: "advanced",
			question: "What is a values file template and how would you generate environment-specific values files in a GitOps pipeline?",
			options: [
				"Use Helm to template values files",
				"Use a templating tool (envsubst, gomplate, Kustomize) or a script that injects CI variables into a template values file, then commit or pass to helm install — keeps sensitive logic in the pipeline",
				"values files can't be generated dynamically",
				"Only static values files are supported by Helm"
			],
			correct: 1,
			explanation: "Common pattern: store a values.yaml.tpl with ${IMAGE_TAG} placeholders, use envsubst in CI to generate the final values.yaml, then helm upgrade -f generated-values.yaml. Keeps templates in Git, dynamic values in CI."
		}
	]
},
	"3-4": {
	title: "Helm hooks and subchart dependencies",
	questions: [
		{
			tier: "beginner",
			question: "What is a Helm hook?",
			options: [
				"A webhook for Helm events",
				"An annotation on a Kubernetes resource that tells Helm to deploy it at a specific lifecycle point (pre-install, post-install, pre-upgrade, etc.)",
				"A plugin hook for extending Helm",
				"A rollback trigger"
			],
			correct: 1,
			explanation: "Hooks (helm.sh/hook annotation) let you run resources at specific lifecycle moments — run DB migrations before install, send notifications after upgrade, cleanup on delete."
		},
		{
			tier: "beginner",
			question: "What hook annotation runs a Job before a new release is installed?",
			options: [
				"helm.sh/hook: pre-deploy",
				"helm.sh/hook: pre-install",
				"helm.sh/hook: before-install",
				"helm.sh/hook: init"
			],
			correct: 1,
			explanation: "helm.sh/hook: pre-install runs the resource after rendering templates but before any resources are created. Use it for migrations, pre-flight checks, or initial setup."
		},
		{
			tier: "beginner",
			question: "What Helm hook would you use to run Django migrations before deploying a new version?",
			options: [
				"pre-delete",
				"pre-upgrade and pre-install",
				"post-install",
				"post-rollback"
			],
			correct: 1,
			explanation: "Use pre-install (fresh installs) AND pre-upgrade (upgrades) to ensure migrations run before the new app version starts. A Job resource with both hooks handles both scenarios."
		},
		{
			tier: "beginner",
			question: "What is a Helm dependency (subchart)?",
			options: [
				"A Helm plugin that the chart requires",
				"A chart listed in Chart.yaml dependencies section that Helm downloads and deploys alongside the parent chart",
				"A required Kubernetes version",
				"A mandatory values key"
			],
			correct: 1,
			explanation: "Subcharts are dependencies defined in Chart.yaml under 'dependencies'. Run helm dependency update to download them into the charts/ directory."
		},
		{
			tier: "beginner",
			question: "What command downloads chart dependencies defined in Chart.yaml?",
			options: [
				"helm install --dependencies",
				"helm dependency update",
				"helm fetch dependencies",
				"helm get dependencies"
			],
			correct: 1,
			explanation: "helm dependency update reads Chart.yaml dependencies and downloads matching charts into the charts/ directory. Must be run before helm install/upgrade for charts with dependencies."
		},
		{
			tier: "beginner",
			question: "Where are downloaded Helm subchart tarballs stored?",
			options: [
				"In the Helm cache directory",
				"In the charts/ subdirectory of the parent chart",
				"In /tmp/helm/",
				"In a Helm repository"
			],
			correct: 1,
			explanation: "helm dependency update creates/populates the charts/ directory within the parent chart directory. These .tgz files are included when packaging/deploying."
		},
		{
			tier: "beginner",
			question: "What does helm.sh/hook-delete-policy control?",
			options: [
				"When to delete the entire release",
				"When Helm should delete hook resources (before-hook-creation, hook-succeeded, hook-failed)",
				"Whether hooks can be deleted manually",
				"Delete policy for the entire hook namespace"
			],
			correct: 1,
			explanation: "hook-delete-policy: before-hook-creation (default) deletes the old hook Job before creating a new one on re-install/upgrade. hook-succeeded deletes after success. Combine multiple with commas."
		},
		{
			tier: "intermediate",
			question: "What is helm.sh/hook-weight and how does it control multiple hooks?",
			options: [
				"Sets the resource priority in Kubernetes",
				"A numeric value (-100 to 100) that determines execution order for multiple hooks of the same type — lower weight runs first",
				"Controls how long a hook can run",
				"Sets the hook's CPU resources"
			],
			correct: 1,
			explanation: "When multiple pre-install hooks exist, hook-weight orders them. Weight 1 runs before weight 5. Use it to sequence: first create a DB schema, then run migrations, then seed data."
		},
		{
			tier: "intermediate",
			question: "What happens to a release if a pre-install hook Job fails?",
			options: [
				"The release is marked as failed and rolled back",
				"Helm marks the release as FAILED and does not proceed with installing other resources — the release is stuck in FAILED state",
				"Helm retries the hook automatically",
				"The hook failure is ignored and install continues"
			],
			correct: 1,
			explanation: "Hook failure stops the release. The release enters FAILED state. You must helm rollback or helm uninstall before reinstalling. Add --force to override on reinstall."
		},
		{
			tier: "intermediate",
			question: "How do you pass parent chart values to a subchart?",
			options: [
				"Subcharts inherit all parent values automatically",
				"Under the subchart's name in values.yaml: dependencies: redis.port: 6380 — values nested under the subchart name are passed to it",
				"Use a global ConfigMap",
				"Subcharts can't receive values from parent"
			],
			correct: 1,
			explanation: "In parent values.yaml, values nested under the dependency name: redis: { port: 6380 } are passed to the redis subchart. Global values (global:) are accessible to all subcharts."
		},
		{
			tier: "intermediate",
			question: "What does `condition: redis.enabled` in a Chart.yaml dependency do?",
			options: [
				"Sets a condition on the dependency's templates",
				"Conditionally enables/disables the subchart based on the parent values.redis.enabled value — lets users skip installing the subchart",
				"Requires the dependency to be enabled in Helm config",
				"Creates a condition variable in templates"
			],
			correct: 1,
			explanation: "The condition field references a values path. If values.redis.enabled = false, the redis subchart is not deployed. Enables optional dependencies (embedded DB vs external)."
		},
		{
			tier: "intermediate",
			question: "What is the difference between pre-install and pre-upgrade hooks?",
			options: [
				"They are identical",
				"pre-install runs only on fresh helm install; pre-upgrade runs only on helm upgrade — use both annotations for hooks that should run on either operation",
				"pre-install is for Jobs; pre-upgrade is for CronJobs",
				"pre-upgrade only runs if values changed"
			],
			correct: 1,
			explanation: "You often want migrations to run on both fresh installs and upgrades. Add both annotations: helm.sh/hook: pre-install,pre-upgrade to cover both lifecycle events."
		},
		{
			tier: "intermediate",
			question: "How do you override a subchart's values from the parent chart's values.yaml?",
			options: [
				"You can't override subchart values",
				"Nest them under the subchart's alias or name key: postgres: { image: { tag: 15.2 } }",
				"Use --set postgres.image.tag=15.2 only",
				"Edit the subchart's values.yaml directly"
			],
			correct: 1,
			explanation: "Parent values under the dependency name (or alias) override subchart defaults. This is how you configure sub-charts without modifying them — key to clean chart composition."
		},
		{
			tier: "intermediate",
			question: "What is a Chart.yaml `alias` field in dependencies used for?",
			options: [
				"Renames the chart in the UI",
				"Allows installing the same chart twice with different names/configs (e.g., two postgresql instances with aliases postgres-primary and postgres-replica)",
				"Sets a shorter chart name",
				"Creates a Kubernetes namespace alias"
			],
			correct: 1,
			explanation: "alias lets you instantiate the same chart multiple times. Each alias gets its own values namespace in parent values.yaml. Perfect for multi-region or primary/replica database patterns."
		},
		{
			tier: "advanced",
			question: "What are the limitations of Helm hooks for production DB migration management?",
			options: [
				"No limitations — hooks are the best solution",
				"Hooks are Jobs with fixed execution windows; if migration takes too long, Helm times out. No mechanism for migration state tracking, rollback on migration failure, or coordination with zero-downtime schema changes",
				"Hooks can't run database commands",
				"Hooks require a separate migration controller"
			],
			correct: 1,
			explanation: "For complex schemas, consider dedicated migration controllers (e.g., migrate, Flyway), separate CI/CD migration pipeline steps, or Argo Workflows that track migration state separately from Helm."
		},
		{
			tier: "advanced",
			question: "What is `helm.sh/resource-policy: keep` and when is it critical?",
			options: [
				"Keeps the resource from being updated",
				"Prevents Helm from deleting the resource when helm uninstall is run — critical for PVCs and database Secrets that should survive chart lifecycle",
				"Makes the resource immutable",
				"Keeps the resource in a separate namespace"
			],
			correct: 1,
			explanation: "Annotate PVCs, database Secrets, and production data resources with resource-policy: keep. Without it, helm uninstall deletes everything including persistent data."
		},
		{
			tier: "advanced",
			question: "How do you test a Helm hook without actually modifying the cluster?",
			options: [
				"No way to test hooks without deploying",
				"helm template renders hooks to YAML; --dry-run simulates the install; use test environments or Kubernetes in CI (kind/minikube) for full validation",
				"Use helm hook test command",
				"helm validate hooks"
			],
			correct: 1,
			explanation: "helm template shows rendered hook manifests. --dry-run sends them to the API server for validation without creating resources. For full hook execution testing, use kind in CI."
		},
		{
			tier: "advanced",
			question: "What is the recommended pattern for managing a chart with complex dependencies including an external database in production?",
			options: [
				"Include the database as a subchart always",
				"Use condition: to optionally include the DB subchart (for dev), while prod uses an ExternalName Service pointing to RDS — the app code is identical, only the Service target differs",
				"Never include databases as subcharts",
				"Use a separate Helm chart for the database"
			],
			correct: 1,
			explanation: "Best practice: embedded subchart for dev/testing (quick setup), ExternalName or ServiceEntry pointing to managed DB for prod. A condition value (db.embedded: true/false) controls which is used."
		},
		{
			tier: "advanced",
			question: "How do you implement chart testing with `helm test`?",
			options: [
				"helm test creates test environments automatically",
				"Add test pods with annotation helm.sh/hook: test in the templates/tests/ directory — they run on helm test and must exit 0 for the test to pass",
				"Chart tests use standard Kubernetes Jobs",
				"helm test only validates YAML syntax"
			],
			correct: 1,
			explanation: "helm test runs pods annotated with helm.sh/hook: test. These can be curl health checks, pytest runs, or smoke tests. They run after install and report pass/fail."
		},
		{
			tier: "advanced",
			question: "What is the Chart.yaml `type` field and what does `library` do?",
			options: [
				"Sets the chart's application type (web, database, etc.)",
				"type: application (default) is installable; type: library is a non-installable chart providing only named template helpers to other charts that import it as a dependency",
				"Sets the Kubernetes API version",
				"Controls the chart's rendering mode"
			],
			correct: 1,
			explanation: "Library charts (type: library) can't be installed directly — no deployable resources. They expose named templates via define/include for parent charts to import, enabling shared template libraries."
		}
	]
},
	"3-5": {
	title: "Boss: Convert manifests into a reusable Helm chart",
	questions: [
		{
			tier: "beginner",
			question: "What is the first step when converting existing kubectl manifests into a Helm chart?",
			options: [
				"Run helm convert on your manifests",
				"Run helm create my-chart to create the chart skeleton, then move manifests into templates/ and identify hardcoded values to extract",
				"Package the manifests into a tarball",
				"Add labels to all resources first"
			],
			correct: 1,
			explanation: "helm create gives you the directory structure (Chart.yaml, values.yaml, templates/). Then identify environment-specific values (image, replicas, resources) to replace with template variables."
		},
		{
			tier: "beginner",
			question: "What is the Helm chart directory structure?",
			options: [
				"chart.yaml, config.yaml, kubernetes/",
				"Chart.yaml, values.yaml, templates/, charts/ (for dependencies), .helmignore",
				"manifest.yaml, vars.yaml, k8s/",
				"index.yaml, defaults.yaml, resources/"
			],
			correct: 1,
			explanation: "Standard structure: Chart.yaml (metadata), values.yaml (defaults), templates/ (K8s manifests with templating), charts/ (downloaded dependencies), .helmignore (exclude files from packaging)."
		},
		{
			tier: "beginner",
			question: "What is the convention for naming a template variable for the Docker image tag?",
			options: [
				"{{ .Values.tag }}",
				"{{ .Values.image.tag }}",
				"{{ .image.tag }}",
				"{{ .Values.docker.imageTag }}"
			],
			correct: 1,
			explanation: "Convention: image: { repository, tag, pullPolicy } nested under the service name or at root level. This matches helm create output and what users expect."
		},
		{
			tier: "beginner",
			question: "What labels should every Helm-templated Kubernetes resource include?",
			options: [
				"Only app: <name>",
				"app.kubernetes.io/name, app.kubernetes.io/instance, app.kubernetes.io/version, app.kubernetes.io/managed-by: Helm",
				"helm: true only",
				"No standard labels required"
			],
			correct: 1,
			explanation: "Recommended labels (from helm create template): app.kubernetes.io/name (chart name), instance (.Release.Name), version (.Chart.AppVersion), managed-by (Helm). These enable tooling and filtering."
		},
		{
			tier: "beginner",
			question: "What does {{ .Release.Name }} provide in a Helm template?",
			options: [
				"The chart version",
				"The name of the Helm release (specified in helm install <release-name>)",
				"The Kubernetes namespace",
				"The container image name"
			],
			correct: 1,
			explanation: ".Release.Name is the release name given at helm install. It's used to prefix resource names (e.g., {{ .Release.Name }}-web) so multiple installs don't conflict."
		},
		{
			tier: "beginner",
			question: "How do you include the chart name in a resource name to ensure uniqueness?",
			options: [
				"{{ .Release.Name }}",
				"{{ include \"mychart.fullname\" . }} — a helper that combines .Release.Name and .Chart.Name",
				"{{ .Chart.Name }}",
				"{{ .Values.name }}"
			],
			correct: 1,
			explanation: "The standard mychart.fullname helper (generated by helm create) concatenates release name and chart name with truncation, ensuring unique, K8s-valid resource names."
		},
		{
			tier: "beginner",
			question: "What should you do with hardcoded values like `replicas: 3` in your original manifest?",
			options: [
				"Leave them hardcoded",
				"Replace with {{ .Values.replicaCount | default 1 }} and add replicaCount: 3 to values.yaml as the default",
				"Delete them — Kubernetes uses 1 by default",
				"Put them in Chart.yaml"
			],
			correct: 1,
			explanation: "Move hardcoded environment-specific values to values.yaml. The template references .Values, making the value customizable per environment without editing templates."
		},
		{
			tier: "intermediate",
			question: "How do you handle resource requests and limits in a Helm chart to allow override per environment?",
			options: [
				"Hardcode them in the template",
				"Define a resources: {} block in values.yaml and use {{ toYaml .Values.resources | nindent 12 }} in the template",
				"Use separate templates per environment",
				"Resources can't be templated in Helm"
			],
			correct: 1,
			explanation: "The standard pattern: resources: {} default in values.yaml (no limits), with a toYaml/nindent block in the Deployment template. Override with -f prod-resources.yaml per environment."
		},
		{
			tier: "intermediate",
			question: "How do you conditionally include a resource (e.g., an Ingress) only when enabled in values?",
			options: [
				"Delete the Ingress template for environments that don't need it",
				"Wrap the entire template with {{- if .Values.ingress.enabled -}} ... {{- end }}",
				"Use a separate chart for Ingress",
				"Set replicas: 0 for the Ingress"
			],
			correct: 1,
			explanation: "Wrapping with {{ if .Values.ingress.enabled }} makes the entire resource conditional. Set ingress.enabled: false in values.yaml as default or per-environment."
		},
		{
			tier: "intermediate",
			question: "What is the helm create generated NOTES.txt file used for?",
			options: [
				"Documentation for Chart.yaml fields",
				"A template rendered after helm install and displayed to the user — use it to show service URLs, next steps, or important configuration notes",
				"A changelog for the chart",
				"Test notes for helm test"
			],
			correct: 1,
			explanation: "NOTES.txt is rendered as a Go template and printed after install. Conventionally shows how to access the service: minikube service URL, port-forward commands, or LoadBalancer IP."
		},
		{
			tier: "intermediate",
			question: "How should Secrets and ConfigMaps be named in a Helm chart to avoid conflicts?",
			options: [
				"Use the same name as in the original manifest",
				"Include .Release.Name: {{ .Release.Name }}-config, {{ .Release.Name }}-secret",
				"Use random names with randAlphaNum",
				"Secrets don't need unique names across namespaces"
			],
			correct: 1,
			explanation: "Prefixing with .Release.Name ensures uniqueness when the same chart is installed multiple times (different environments in the same namespace, multiple tenants)."
		},
		{
			tier: "intermediate",
			question: "What does `helm package ./my-chart` do?",
			options: [
				"Installs the chart",
				"Creates a versioned .tgz archive (my-chart-0.1.0.tgz) from the chart directory, ready for distribution via a chart repository",
				"Validates the chart",
				"Creates a backup of the chart"
			],
			correct: 1,
			explanation: "helm package bundles the chart into a distributable .tgz. The version comes from Chart.yaml. Use this to publish to ChartMuseum, OCI registry, or GitHub Pages."
		},
		{
			tier: "intermediate",
			question: "How do you ensure env vars are correctly templated from a ConfigMap in the chart?",
			options: [
				"Reference them directly in the template",
				"Template the ConfigMap with values, then in the Deployment use envFrom.configMapRef.name: {{ include \"mychart.fullname\" . }}-config",
				"Use hardcoded ConfigMap names",
				"ConfigMaps can't be templated in Helm"
			],
			correct: 1,
			explanation: "Both the ConfigMap name in its metadata.name AND the envFrom reference in the Deployment must use the same templated name function. Consistency via the fullname helper prevents mismatches."
		},
		{
			tier: "intermediate",
			question: "What are the most common values to externalize when converting a Django app manifest to Helm?",
			options: [
				"Only the image tag",
				"Image (repo, tag, pullPolicy), replicas, resources, environment variables (from ConfigMap/Secret names), ingress host/TLS, HPA settings, service type/port",
				"Only environment-specific values",
				"Nothing should be externalized — keep templates simple"
			],
			correct: 1,
			explanation: "Systematically extract all things that change between environments. Image tag changes per deploy; replicas and resources differ by env; hostnames differ per stage."
		},
		{
			tier: "advanced",
			question: "What is the challenge of managing Helm chart versioning alongside application versioning?",
			options: [
				"They are always the same version",
				"Chart version (Chart.yaml: version) tracks chart changes; appVersion tracks the app version. Bumping appVersion but not version is incorrect — chart version must increment if templates change",
				"Only appVersion matters",
				"Semver is not required for Helm charts"
			],
			correct: 1,
			explanation: "version is for the chart structure (templates, helpers). appVersion is informational (app version). Both should be in semver. CI should auto-increment chart version on any chart file change."
		},
		{
			tier: "advanced",
			question: "What is the 'render-once' problem with Helm and how does it affect stateful apps?",
			options: [
				"Helm renders templates too many times",
				"Helm renders templates at install/upgrade time; it's not a continuous reconciler. If resource specs drift (manual kubectl edits), Helm doesn't detect or correct them until the next upgrade",
				"Rendered YAML can't be stored in etcd",
				"Helm templates are rendered on every pod restart"
			],
			correct: 1,
			explanation: "Unlike GitOps/Flux which continuously reconcile, Helm only acts on explicit helm upgrade commands. Drift between desired (chart) and actual state is a known Helm limitation."
		},
		{
			tier: "advanced",
			question: "How do you handle the chicken-and-egg problem where a Job hook needs a Secret that Helm creates?",
			options: [
				"This can't be solved with Helm",
				"Use hook-weight to ensure the Secret (weight -5) is created before the migration Job (weight 0); or create the Secret as a regular resource (not a hook) so it's created before hooks run",
				"Create the Secret outside of Helm",
				"Use pre-install-before hook type"
			],
			correct: 1,
			explanation: "Regular chart resources are created before hooks. Alternatively, use hook-weight ordering. The Secret at weight -10 runs before the migration Job at weight 0 within the same hook phase."
		},
		{
			tier: "advanced",
			question: "What is the recommended approach for chart CI/CD — should chart version be bumped manually or automatically?",
			options: [
				"Always manual to ensure intentional releases",
				"Automatically: CI bumps the patch version on any file change in the chart directory using semver tools; major/minor bumps for breaking changes are manual or conventional commit-driven",
				"Never change chart versions",
				"Chart versioning is optional"
			],
			correct: 1,
			explanation: "Automated patch bumps (via CI scripts or chart-releaser action on GitHub) ensure every change is versioned and deployable. This enables proper release history and rollback."
		},
		{
			tier: "advanced",
			question: "How do you validate the rendered chart against the Kubernetes API without deploying?",
			options: [
				"Only live cluster validation is possible",
				"helm install --dry-run --generate-name sends rendered manifests to the API server for validation; use kubeval or kubeconform in CI for schema validation without cluster access",
				"Use helm lint only",
				"helm template | kubectl apply --dry-run=client"
			],
			correct: 1,
			explanation: "For CI without cluster: helm template | kubeval validates schema. With cluster: helm install --dry-run does server-side validation. Both catch YAML errors before real deployment."
		},
		{
			tier: "advanced",
			question: "What is the benefit of using `helm create` as a starting point vs writing from scratch?",
			options: [
				"No benefit — helm create output is too opinionated",
				"helm create generates recommended label helpers, NOTES.txt, HPA template, ServiceAccount, and fullname helpers following K8s best practices — gives a production-ready foundation vs reinventing the wheel",
				"helm create is only for beginners",
				"helm create output is not suitable for production"
			],
			correct: 1,
			explanation: "helm create follows best practices: recommended labels, proper fullname computation, conditional Ingress, HPA, ServiceAccount. Starting from this scaffold ensures your chart follows conventions from day one."
		}
	]
}
};

var css_248z$2 = ".QuizModal-module__quizBackdrop___ARu85{align-items:center;backdrop-filter:blur(4px);background:#000000d9;display:flex;inset:0;justify-content:center;opacity:0;padding:1rem;pointer-events:none;position:fixed;transition:opacity .3s ease;z-index:50000}.QuizModal-module__quizBackdrop___ARu85.QuizModal-module__active___CdCfB{opacity:1;pointer-events:all}.QuizModal-module__quizModal___LRjF1{background:var(--surface);border:1px solid var(--border2);max-height:90vh;max-width:680px;overflow-y:auto;position:relative;scrollbar-color:var(--border2) var(--bg);scrollbar-width:thin;transform:translateY(20px);transition:transform .3s ease;width:100%}.QuizModal-module__quizBackdrop___ARu85.QuizModal-module__active___CdCfB .QuizModal-module__quizModal___LRjF1{transform:translateY(0)}.QuizModal-module__quizModal___LRjF1:after,.QuizModal-module__quizModal___LRjF1:before{background:var(--surface);color:var(--ember);content:\"◆\";font-size:1rem;padding:0 .5rem;position:absolute;top:-.6rem}.QuizModal-module__quizModal___LRjF1:before{left:2rem}.QuizModal-module__quizModal___LRjF1:after{right:2rem}.QuizModal-module__quizHeader___hPRnV{background:var(--surface);border-bottom:1px solid var(--border);padding:1.5rem 1.5rem 1rem;position:sticky;top:0;z-index:10}.QuizModal-module__quizQuestTitle___9iMR9{color:var(--text);font-family:Cinzel,serif;font-size:1rem;font-weight:700;line-height:1.3;margin-bottom:.75rem}.QuizModal-module__quizMetaRow___2FeGr{align-items:center;display:flex;flex-wrap:wrap;gap:.5rem;justify-content:space-between}.QuizModal-module__quizTierBadges___tuad8{display:flex;gap:.4rem}.QuizModal-module__tierBadge___keUHq{border:1px solid;font-family:Share Tech Mono,monospace;font-size:.6rem;letter-spacing:.1em;padding:.15rem .5rem}.QuizModal-module__tierBadge___keUHq.QuizModal-module__beginner___Vnolt{background:rgba(var(--sage-rgb),.06);border-color:rgba(var(--sage-rgb),.3);color:var(--sage)}.QuizModal-module__tierBadge___keUHq.QuizModal-module__intermediate___hJ-B-{background:rgba(var(--ember2-rgb),.06);border-color:rgba(var(--ember2-rgb),.3);color:var(--ember2)}.QuizModal-module__tierBadge___keUHq.QuizModal-module__advanced___6WcGV{background:rgba(var(--blood-light-rgb),.06);border-color:rgba(var(--blood-light-rgb),.3);color:var(--blood-light)}.QuizModal-module__quizScoreDisplay___tWwMI{color:var(--muted);font-family:Share Tech Mono,monospace;font-size:.75rem}.QuizModal-module__quizProgressBar___1VsAX{background:var(--border);border-radius:2px;height:3px;margin-top:.75rem;overflow:hidden}.QuizModal-module__quizProgressFill___2ZASw{background:linear-gradient(90deg,var(--sage),var(--ember2));height:100%;transition:width .4s ease}.QuizModal-module__quizLoading___Y14cI{align-items:center;display:flex;flex-direction:column;gap:1.5rem;justify-content:center;padding:4rem 2rem}.QuizModal-module__quizLoadingIcon___62HyT{animation:QuizModal-module__spin___5mLlQ 2s linear infinite;font-size:2.5rem}@keyframes QuizModal-module__spin___5mLlQ{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.QuizModal-module__quizLoadingText___rZ1m4{color:var(--muted);font-family:Cinzel,serif;font-size:.9rem;font-style:italic;text-align:center}.QuizModal-module__quizLoadingSub___JbDRs{color:var(--dim);font-family:Share Tech Mono,monospace;font-size:.65rem;letter-spacing:.1em}.QuizModal-module__quizQuestions___LBUPl{display:flex;flex-direction:column;gap:1.5rem;padding:1.5rem}.QuizModal-module__quizBody___oDieI{min-height:200px}.QuizModal-module__questionBlock___TQo1n{background:var(--bg2);border:1px solid var(--border);opacity:0;padding:1.1rem 1.2rem;transform:translateY(8px);transition:opacity .3s ease,transform .3s ease}.QuizModal-module__questionBlock___TQo1n.QuizModal-module__visible___KmdOV{opacity:1;transform:translateY(0)}.QuizModal-module__questionBlock___TQo1n.QuizModal-module__correct___-F1i5{background:rgba(var(--sage-rgb),.04);border-color:rgba(var(--sage-rgb),.4)}.QuizModal-module__questionBlock___TQo1n.QuizModal-module__wrong___m1gIk{background:rgba(var(--blood-light-rgb),.04);border-color:rgba(var(--blood-light-rgb),.4)}.QuizModal-module__qTierLabel___EnyDT{display:inline-block;font-family:Share Tech Mono,monospace;font-size:.58rem;letter-spacing:.12em;margin-bottom:.5rem;padding:.1rem .4rem}.QuizModal-module__qTierLabel___EnyDT.QuizModal-module__beginner___Vnolt{color:var(--sage)}.QuizModal-module__qTierLabel___EnyDT.QuizModal-module__intermediate___hJ-B-{color:var(--ember2)}.QuizModal-module__qTierLabel___EnyDT.QuizModal-module__advanced___6WcGV{color:var(--blood-light)}.QuizModal-module__qNumber___pnfyC{color:var(--dim);font-family:Share Tech Mono,monospace;font-size:.6rem;margin-right:.4rem}.QuizModal-module__qText___Xq01D{color:var(--text);font-size:.95rem;line-height:1.5;margin-bottom:.9rem}.QuizModal-module__qOptions___-jL4f{display:flex;flex-direction:column;gap:.4rem}.QuizModal-module__qOption___qpozn{align-items:flex-start;border:1px solid var(--border);color:var(--muted);cursor:pointer;display:flex;font-size:.88rem;gap:.7rem;line-height:1.4;padding:.6rem .8rem;transition:all .15s}.QuizModal-module__qOption___qpozn:hover:not(.QuizModal-module__disabled___cDaZS){background:#ffffff05;border-color:var(--border2);color:var(--text)}.QuizModal-module__qOption___qpozn.QuizModal-module__selected___cYxa8{background:rgba(var(--ember-rgb),.06);border-color:var(--ember);color:var(--text)}.QuizModal-module__qOption___qpozn.QuizModal-module__correctAns___bLi5f{background:rgba(var(--sage-rgb),.08)!important;border-color:var(--sage)!important;color:var(--sage)!important}.QuizModal-module__qOption___qpozn.QuizModal-module__wrongAns___hd7qR{background:rgba(var(--blood-light-rgb),.08)!important;border-color:var(--blood-light)!important;color:var(--blood-light)!important}.QuizModal-module__qOption___qpozn.QuizModal-module__disabled___cDaZS{cursor:default}.QuizModal-module__qOptKey___JOlRX{color:var(--dim);flex-shrink:0;font-family:Share Tech Mono,monospace;font-size:.65rem;margin-top:1px;min-width:1.2rem}.QuizModal-module__qExplanation___Pavzx{border-left:2px solid var(--border2);color:var(--muted);display:none;font-size:.82rem;font-style:italic;line-height:1.5;margin-top:.75rem;padding:.6rem .8rem}.QuizModal-module__qExplanation___Pavzx.QuizModal-module__show___bepDj{display:block}.QuizModal-module__qExplanation___Pavzx.QuizModal-module__correctExp___LUZNz{border-color:var(--sage)}.QuizModal-module__qExplanation___Pavzx.QuizModal-module__wrongExp___fq-Oj{border-color:var(--blood-light)}.QuizModal-module__quizFooter___zIhvF{align-items:center;background:var(--surface);border-top:1px solid var(--border);bottom:0;display:flex;flex-wrap:wrap;gap:1rem;justify-content:space-between;padding:1.2rem 1.5rem;position:sticky}.QuizModal-module__quizResultMsg___sbe53{flex:1;font-family:Cinzel,serif;font-size:.85rem}.QuizModal-module__quizResultMsg___sbe53.QuizModal-module__pass___FayDE{color:var(--sage)}.QuizModal-module__quizResultMsg___sbe53.QuizModal-module__fail___Nle-K{color:var(--blood-light)}.QuizModal-module__quizResultMsg___sbe53.QuizModal-module__pending___BSkGy{color:var(--muted);font-family:Crimson Text,serif;font-style:italic}.QuizModal-module__quizBtn___wS01e{background:none;border:1px solid;cursor:pointer;font-family:Cinzel,serif;font-size:.78rem;letter-spacing:.08em;padding:.6rem 1.4rem;transition:all .2s;white-space:nowrap}.QuizModal-module__quizBtnClose___XCfWa{border-color:var(--border2);color:var(--muted)}.QuizModal-module__quizBtnClose___XCfWa:hover{border-color:var(--muted);color:var(--text)}.QuizModal-module__quizBtnComplete___btrXC{background:var(--sage);border-color:var(--sage);color:var(--bg);display:none}.QuizModal-module__quizBtnComplete___btrXC:hover{background:var(--sage-bright);border-color:var(--sage-bright)}.QuizModal-module__quizBtnComplete___btrXC.QuizModal-module__show___bepDj{display:block}.QuizModal-module__quizBtnRetry___vRmDh{border-color:rgba(var(--ember2-rgb),.4);color:var(--ember2);display:none}.QuizModal-module__quizBtnRetry___vRmDh:hover{background:rgba(var(--ember2-rgb),.08)}.QuizModal-module__quizBtnRetry___vRmDh.QuizModal-module__show___bepDj{display:block}";
var styles$2 = {"quizBackdrop":"QuizModal-module__quizBackdrop___ARu85","active":"QuizModal-module__active___CdCfB","quizModal":"QuizModal-module__quizModal___LRjF1","quizHeader":"QuizModal-module__quizHeader___hPRnV","quizQuestTitle":"QuizModal-module__quizQuestTitle___9iMR9","quizMetaRow":"QuizModal-module__quizMetaRow___2FeGr","quizTierBadges":"QuizModal-module__quizTierBadges___tuad8","tierBadge":"QuizModal-module__tierBadge___keUHq","beginner":"QuizModal-module__beginner___Vnolt","intermediate":"QuizModal-module__intermediate___hJ-B-","advanced":"QuizModal-module__advanced___6WcGV","quizScoreDisplay":"QuizModal-module__quizScoreDisplay___tWwMI","quizProgressBar":"QuizModal-module__quizProgressBar___1VsAX","quizProgressFill":"QuizModal-module__quizProgressFill___2ZASw","quizLoading":"QuizModal-module__quizLoading___Y14cI","quizLoadingIcon":"QuizModal-module__quizLoadingIcon___62HyT","spin":"QuizModal-module__spin___5mLlQ","quizLoadingText":"QuizModal-module__quizLoadingText___rZ1m4","quizLoadingSub":"QuizModal-module__quizLoadingSub___JbDRs","quizQuestions":"QuizModal-module__quizQuestions___LBUPl","quizBody":"QuizModal-module__quizBody___oDieI","questionBlock":"QuizModal-module__questionBlock___TQo1n","visible":"QuizModal-module__visible___KmdOV","correct":"QuizModal-module__correct___-F1i5","wrong":"QuizModal-module__wrong___m1gIk","qTierLabel":"QuizModal-module__qTierLabel___EnyDT","qNumber":"QuizModal-module__qNumber___pnfyC","qText":"QuizModal-module__qText___Xq01D","qOptions":"QuizModal-module__qOptions___-jL4f","qOption":"QuizModal-module__qOption___qpozn","disabled":"QuizModal-module__disabled___cDaZS","selected":"QuizModal-module__selected___cYxa8","correctAns":"QuizModal-module__correctAns___bLi5f","wrongAns":"QuizModal-module__wrongAns___hd7qR","qOptKey":"QuizModal-module__qOptKey___JOlRX","qExplanation":"QuizModal-module__qExplanation___Pavzx","show":"QuizModal-module__show___bepDj","correctExp":"QuizModal-module__correctExp___LUZNz","wrongExp":"QuizModal-module__wrongExp___fq-Oj","quizFooter":"QuizModal-module__quizFooter___zIhvF","quizResultMsg":"QuizModal-module__quizResultMsg___sbe53","pass":"QuizModal-module__pass___FayDE","fail":"QuizModal-module__fail___Nle-K","pending":"QuizModal-module__pending___BSkGy","quizBtn":"QuizModal-module__quizBtn___wS01e","quizBtnClose":"QuizModal-module__quizBtnClose___XCfWa","quizBtnComplete":"QuizModal-module__quizBtnComplete___btrXC","quizBtnRetry":"QuizModal-module__quizBtnRetry___vRmDh"};
styleInject(css_248z$2);

const QuizModal = ({
  questId,
  onClose,
  onComplete
}) => {
  const [questions, setQuestions] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [submitted, setSubmitted] = React.useState({});
  const [error, setError] = React.useState(null);
  const quest = ACTS.flatMap(a => a.quests).find(q => q.id === questId);
  const loadQuestions = React.useCallback(() => {
    setLoading(true);
    setError(null);
    setSubmitted({});
    try {
      // Quiz data is bundled with the component - no fetch needed!
      if (quizDataJson && quizDataJson[questId] && quizDataJson[questId].questions) {
        setQuestions(quizDataJson[questId].questions);
        setLoading(false);
      } else {
        setError(`Questions not found for quest "${questId}".`);
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [questId]);
  React.useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);
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

var css_248z$1 = ".Toast-module__toast___czpzb{background:var(--surface2);border:1px solid var(--ember);bottom:2rem;box-shadow:0 0 40px rgba(var(--ember-rgb),.3);color:var(--ember2);font-family:Cinzel,serif;font-size:.85rem;left:50%;padding:.75rem 1.5rem;pointer-events:none;position:fixed;transform:translateX(-50%) translateY(100px);transition:transform .4s cubic-bezier(.22,1,.36,1);white-space:nowrap;z-index:10000}.Toast-module__toast___czpzb.Toast-module__show___VkLkl{transform:translateX(-50%) translateY(0)}";
var styles$1 = {"toast":"Toast-module__toast___czpzb","show":"Toast-module__show___VkLkl"};
styleInject(css_248z$1);

const Toast = ({
  message
}) => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
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
  const [state, setState] = React.useState(() => {
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
  React.useEffect(() => {
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

/**
 * Centralized Theme Configuration
 *
 * Change the entire website's color scheme by updating ACTIVE_THEME below.
 * Each palette defines every CSS variable used across the app.
 */

const THEME_PALETTES = {
  emberForge: {
    name: 'Ember Forge',
    description: 'Classic dark RPG with ember and amber — the original theme',
    colors: {
      bg: '#0d0a06',
      bg2: '#13100a',
      surface: '#1a1510',
      surface2: '#221c14',
      border: '#3d3020',
      border2: '#5a4530',
      ember: '#f97316',
      ember2: '#fbbf24',
      ember3: '#fde68a',
      emberDark: '#c2410c',
      blood: '#dc2626',
      bloodLight: '#f87171',
      bloodPale: '#fca5a5',
      sage: '#4ade80',
      sageBright: '#22c55e',
      ice: '#67e8f9',
      violet: '#a78bfa',
      text: '#e8d5b0',
      muted: '#8a7055',
      dim: '#5a4535',
      emberRgb: '249, 115, 22',
      ember2Rgb: '251, 191, 36',
      sageRgb: '74, 222, 128',
      bloodRgb: '220, 38, 38',
      bloodLightRgb: '248, 113, 113',
      iceRgb: '103, 232, 249'
    }
  },
  frostKingdom: {
    name: 'Frost Kingdom',
    description: 'Cool blue ice kingdom — crisp and mystical',
    colors: {
      bg: '#060a0d',
      bg2: '#0a1015',
      surface: '#0f1a22',
      surface2: '#142530',
      border: '#1e3a4f',
      border2: '#2d5570',
      ember: '#38bdf8',
      ember2: '#67e8f9',
      ember3: '#cffafe',
      emberDark: '#0284c7',
      blood: '#dc2626',
      bloodLight: '#f87171',
      bloodPale: '#fca5a5',
      sage: '#4ade80',
      sageBright: '#22c55e',
      ice: '#a5f3fc',
      violet: '#c4b5fd',
      text: '#c8e6f5',
      muted: '#5588a0',
      dim: '#355570',
      emberRgb: '56, 189, 248',
      ember2Rgb: '103, 232, 249',
      sageRgb: '74, 222, 128',
      bloodRgb: '220, 38, 38',
      bloodLightRgb: '248, 113, 113',
      iceRgb: '165, 243, 252'
    }
  },
  shadowRealm: {
    name: 'Shadow Realm',
    description: 'Deep purple cyberpunk — mystical and futuristic',
    colors: {
      bg: '#0a0612',
      bg2: '#100b18',
      surface: '#18102a',
      surface2: '#201838',
      border: '#35255a',
      border2: '#4a3580',
      ember: '#a78bfa',
      ember2: '#c4b5fd',
      ember3: '#ede9fe',
      emberDark: '#7c3aed',
      blood: '#ef4444',
      bloodLight: '#f87171',
      bloodPale: '#fca5a5',
      sage: '#4ade80',
      sageBright: '#22c55e',
      ice: '#67e8f9',
      violet: '#e879f9',
      text: '#d8ccf0',
      muted: '#7a65a8',
      dim: '#503d75',
      emberRgb: '167, 139, 250',
      ember2Rgb: '196, 181, 253',
      sageRgb: '74, 222, 128',
      bloodRgb: '239, 68, 68',
      bloodLightRgb: '248, 113, 113',
      iceRgb: '103, 232, 249'
    }
  },
  enchantedForest: {
    name: 'Enchanted Forest',
    description: 'Deep emerald green — nature and growth',
    colors: {
      bg: '#040d06',
      bg2: '#08130a',
      surface: '#0c1a10',
      surface2: '#122214',
      border: '#1e3d22',
      border2: '#2d5a32',
      ember: '#4ade80',
      ember2: '#86efac',
      ember3: '#dcfce7',
      emberDark: '#16a34a',
      blood: '#dc2626',
      bloodLight: '#f87171',
      bloodPale: '#fca5a5',
      sage: '#a3e635',
      sageBright: '#84cc16',
      ice: '#67e8f9',
      violet: '#a78bfa',
      text: '#c5e8d0',
      muted: '#558a60',
      dim: '#355a3d',
      emberRgb: '74, 222, 128',
      ember2Rgb: '134, 239, 172',
      sageRgb: '163, 230, 53',
      bloodRgb: '220, 38, 38',
      bloodLightRgb: '248, 113, 113',
      iceRgb: '103, 232, 249'
    }
  },
  dragonsBreath: {
    name: "Dragon's Breath",
    description: 'Fiery reds and warm golds — the heat of battle',
    colors: {
      bg: '#0d0604',
      bg2: '#150a06',
      surface: '#1f100a',
      surface2: '#2a1610',
      border: '#4a2518',
      border2: '#6a3525',
      ember: '#ef4444',
      ember2: '#f97316',
      ember3: '#fde68a',
      emberDark: '#b91c1c',
      blood: '#f43f5e',
      bloodLight: '#fb7185',
      bloodPale: '#fecdd3',
      sage: '#4ade80',
      sageBright: '#22c55e',
      ice: '#67e8f9',
      violet: '#a78bfa',
      text: '#f0d5c0',
      muted: '#9a6050',
      dim: '#6a4035',
      emberRgb: '239, 68, 68',
      ember2Rgb: '249, 115, 22',
      sageRgb: '74, 222, 128',
      bloodRgb: '244, 63, 94',
      bloodLightRgb: '251, 113, 133',
      iceRgb: '103, 232, 249'
    }
  },
  ironCitadel: {
    name: 'Iron Citadel',
    description: 'Neutral steel and slate — disciplined and professional',
    colors: {
      bg: '#0a0a0c',
      bg2: '#101013',
      surface: '#18181b',
      surface2: '#202024',
      border: '#3f3f46',
      border2: '#52525b',
      ember: '#a1a1aa',
      ember2: '#d4d4d8',
      ember3: '#f4f4f5',
      emberDark: '#71717a',
      blood: '#dc2626',
      bloodLight: '#f87171',
      bloodPale: '#fca5a5',
      sage: '#4ade80',
      sageBright: '#22c55e',
      ice: '#67e8f9',
      violet: '#a78bfa',
      text: '#d4d4d8',
      muted: '#71717a',
      dim: '#52525b',
      emberRgb: '161, 161, 170',
      ember2Rgb: '212, 212, 216',
      sageRgb: '74, 222, 128',
      bloodRgb: '220, 38, 38',
      bloodLightRgb: '248, 113, 113',
      iceRgb: '103, 232, 249'
    }
  }
};

/**
 * ━━━ CHANGE THIS TO SWITCH THEMES ━━━
 *
 * Available: 'emberForge' | 'frostKingdom' | 'shadowRealm'
 *          | 'enchantedForest' | 'dragonsBreath' | 'ironCitadel'
 */
const ACTIVE_THEME = 'enchantedForest';
const getActiveTheme = () => THEME_PALETTES[ACTIVE_THEME] || THEME_PALETTES.emberForge;
const getThemeColors = () => getActiveTheme().colors;
const getAllThemeNames = () => Object.entries(THEME_PALETTES).map(([key, val]) => ({
  key,
  name: val.name,
  description: val.description
}));

/**
 * Returns an object mapping CSS custom-property names to values,
 * ready to be applied on the document root.
 */
const getCSSVariables = themeKey => {
  const palette = THEME_PALETTES[themeKey] || THEME_PALETTES[ACTIVE_THEME];
  const c = palette.colors;
  return {
    '--bg': c.bg,
    '--bg2': c.bg2,
    '--surface': c.surface,
    '--surface2': c.surface2,
    '--border': c.border,
    '--border2': c.border2,
    '--ember': c.ember,
    '--ember2': c.ember2,
    '--ember3': c.ember3,
    '--ember-dark': c.emberDark,
    '--blood': c.blood,
    '--blood-light': c.bloodLight,
    '--blood-pale': c.bloodPale,
    '--sage': c.sage,
    '--sage-bright': c.sageBright,
    '--ice': c.ice,
    '--violet': c.violet,
    '--text': c.text,
    '--muted': c.muted,
    '--dim': c.dim,
    '--ember-rgb': c.emberRgb,
    '--ember2-rgb': c.ember2Rgb,
    '--sage-rgb': c.sageRgb,
    '--blood-rgb': c.bloodRgb,
    '--blood-light-rgb': c.bloodLightRgb,
    '--ice-rgb': c.iceRgb
  };
};

const ThemeContext = /*#__PURE__*/React.createContext(null);

/**
 * Applies CSS custom properties from the active theme onto :root
 * so every CSS file picks them up automatically.
 */
const applyThemeToDOM = themeKey => {
  const vars = getCSSVariables(themeKey);
  const root = document.documentElement;
  Object.entries(vars).forEach(([prop, value]) => {
    root.style.setProperty(prop, value);
  });
};
const ThemeProvider = ({
  children,
  initialTheme
}) => {
  const [themeKey, setThemeKey] = React.useState(initialTheme || ACTIVE_THEME);
  React.useEffect(() => {
    applyThemeToDOM(themeKey);
  }, [themeKey]);
  const switchTheme = React.useCallback(newKey => {
    if (THEME_PALETTES[newKey]) {
      setThemeKey(newKey);
    }
  }, []);
  const value = {
    themeKey,
    themeName: (THEME_PALETTES[themeKey] || THEME_PALETTES[ACTIVE_THEME]).name,
    switchTheme,
    availableThemes: Object.entries(THEME_PALETTES).map(([key, t]) => ({
      key,
      name: t.name,
      description: t.description
    }))
  };
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: value
  }, children);
};
const useTheme = () => {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
};

var css_248z = ".K8sQuizGame-module__app___nwQir{background:var(--bg);color:var(--text);font-family:Crimson Text,Georgia,serif;font-size:17px;line-height:1.6;min-height:100vh;overflow-x:hidden;position:relative}.K8sQuizGame-module__app___nwQir:before{background:repeating-linear-gradient(0deg,#0000,#0000 2px,#00000008 0,#00000008 4px);content:\"\";inset:0;pointer-events:none;position:fixed;z-index:9999}.K8sQuizGame-module__sparks___7f2vY{inset:0;overflow:hidden;pointer-events:none;position:fixed;z-index:1}.K8sQuizGame-module__levelupOverlay___mt4yW{animation:K8sQuizGame-module__levelFlash___6IQo6 1.5s ease forwards;background:rgba(var(--ember-rgb),.15);inset:0;pointer-events:none;position:fixed;z-index:9998}@keyframes K8sQuizGame-module__levelFlash___6IQo6{0%{opacity:0}20%{opacity:1}80%{opacity:1}to{opacity:0}}.K8sQuizGame-module__hero___r-3ex{background:radial-gradient(ellipse at 50% 100%,rgba(var(--ember-rgb),.12) 0,#0000 70%);border-bottom:1px solid var(--border);overflow:hidden;padding:5rem 2rem 4rem;position:relative;text-align:center}.K8sQuizGame-module__hero___r-3ex:after{background:linear-gradient(90deg,#0000,var(--ember),var(--ember2),var(--ember),#0000);bottom:0;content:\"\";height:1px;left:0;position:absolute;right:0}.K8sQuizGame-module__container___BJhyA{margin:0 auto;max-width:900px;padding:0 1.5rem;position:relative;z-index:2}.K8sQuizGame-module__runeBorder___4w9Yu{color:var(--ember);display:inline-block;font-family:Share Tech Mono,monospace;font-size:.65rem;letter-spacing:.4em;margin-bottom:1.5rem;opacity:.6}.K8sQuizGame-module__hero___r-3ex h1{-webkit-text-fill-color:#0000;background:linear-gradient(180deg,var(--ember3) 0,var(--ember) 60%,var(--ember-dark) 100%);-webkit-background-clip:text;background-clip:text;filter:drop-shadow(0 0 30px rgba(var(--ember-rgb),.4));font-family:Cinzel,serif;font-size:clamp(2.2rem,6vw,4.5rem);font-weight:900;line-height:1;margin-bottom:.5rem}.K8sQuizGame-module__heroSubtitle___9hqpb{color:var(--muted);font-size:1rem;font-style:italic;margin-bottom:2.5rem}.K8sQuizGame-module__ornament___wP-cq{color:var(--dim);font-size:.8rem;letter-spacing:.5em;padding:2rem 0 1rem;text-align:center}.K8sQuizGame-module__footer___xh0Lp{background:radial-gradient(ellipse at 50% 100%,rgba(var(--ember-rgb),.05) 0,#0000 70%);border-top:1px solid var(--border);color:var(--dim);font-size:.8rem;font-style:italic;padding:2rem 1rem 3rem;text-align:center}";
var styles = {"app":"K8sQuizGame-module__app___nwQir","sparks":"K8sQuizGame-module__sparks___7f2vY","levelupOverlay":"K8sQuizGame-module__levelupOverlay___mt4yW","hero":"K8sQuizGame-module__hero___r-3ex","container":"K8sQuizGame-module__container___BJhyA","runeBorder":"K8sQuizGame-module__runeBorder___4w9Yu","heroSubtitle":"K8sQuizGame-module__heroSubtitle___9hqpb","ornament":"K8sQuizGame-module__ornament___wP-cq","footer":"K8sQuizGame-module__footer___xh0Lp"};
styleInject(css_248z);

const K8sQuizGameInner = () => {
  const {
    state,
    markQuestDone,
    toggleAchievement,
    unlockAchievement
  } = useGameState();
  const [toast, setToast] = React.useState(null);
  const [quizQuestId, setQuizQuestId] = React.useState(null);
  const [levelUpFlash, setLevelUpFlash] = React.useState(false);
  const totalXP = React.useMemo(() => {
    let xp = 0;
    ACTS.forEach(act => act.quests.forEach(q => {
      if (state.quests[q.id]) xp += q.xp;
    }));
    return xp;
  }, [state.quests]);
  const currentLevel = React.useMemo(() => {
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
const K8sQuizGame = ({
  theme,
  ...props
}) => /*#__PURE__*/React.createElement(ThemeProvider, {
  initialTheme: theme
}, /*#__PURE__*/React.createElement(K8sQuizGameInner, props));

exports.ACHIEVEMENTS = ACHIEVEMENTS;
exports.ACTIVE_THEME = ACTIVE_THEME;
exports.ACTS = ACTS;
exports.K8sQuizGame = K8sQuizGame;
exports.LEVELS = LEVELS;
exports.SPELLS = SPELLS;
exports.THEME_PALETTES = THEME_PALETTES;
exports.ThemeProvider = ThemeProvider;
exports.default = K8sQuizGame;
exports.getActiveTheme = getActiveTheme;
exports.getAllThemeNames = getAllThemeNames;
exports.getThemeColors = getThemeColors;
exports.useGameState = useGameState;
exports.useTheme = useTheme;
//# sourceMappingURL=index.js.map
