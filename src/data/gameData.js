export const LEVELS = [
  { lv: 5, xp: 0, title: "Apprentice Operator", ability: null },
  { lv: 6, xp: 150, title: "Control Plane Scout", ability: { icon: "🔭", name: "Read the Scheduler", desc: "You can predict where a pod will land and why" } },
  { lv: 7, xp: 300, title: "Node Wrangler", ability: { icon: "🐉", name: "Tame the Pod", desc: "You can debug any CrashLoopBackOff without panic" } },
  { lv: 8, xp: 500, title: "Network Weaver", ability: { icon: "🕸️", name: "Bend Traffic to Your Will", desc: "Route, restrict, and expose services confidently" } },
  { lv: 9, xp: 700, title: "Helm Forger", ability: { icon: "⚒️", name: "Craft Deployable Artifacts", desc: "Write a production Helm chart from scratch" } },
  { lv: 10, xp: 1000, title: "Cluster Warlord ★", ability: { icon: "👑", name: "GitOps Omniscience", desc: "Trace any prod issue from Git commit to running pod" } },
];

export const ACTS = [
  {
    id: "I",
    cls: "act-I",
    name: "The Architecture Trials",
    subtitle: "Control plane · Pods · Deployments",
    xp: 300,
    lore: "You have used the blade. Now learn its make. The control plane is a black box no more. Complete these trials to earn the title of Node Wrangler.",
    reward: { icon: "🐉", title: "Node Wrangler unlocked", desc: "Ability: Tame the Pod — you can now debug any CrashLoopBackOff" },
    quests: [
      { id: "1-1", title: "Study the control plane: API server, etcd, scheduler, controller manager", xp: 40, tags: ["kubectl", "~2h"], boss: false },
      { id: "1-2", title: "Master the pod lifecycle: creation, scheduling, restarts, termination", xp: 30, tags: ["kubectl", "~1.5h"], boss: false },
      { id: "1-3", title: "Learn ReplicaSets, Deployments, and DaemonSets — when to use each", xp: 40, tags: ["manifests", "~2h"], boss: false },
      { id: "1-4", title: "Understand ConfigMaps, Secrets, and environment injection", xp: 30, tags: ["manifests", "~1.5h"], boss: false },
      { id: "1-5", title: "BOSS: Deploy a multi-container app (Django + Postgres) — must survive kubectl delete pod", xp: 160, tags: ["minikube", "~3h", "BOSS"], boss: true },
    ]
  },
  {
    id: "II",
    cls: "act-II",
    name: "The Network Labyrinth",
    subtitle: "Services · Ingress · DNS · Network Policies",
    xp: 200,
    lore: "The pods speak to each other in whispers. Learn to hear them — then learn to silence them. Networking is where engineers go to suffer. Emerge from the labyrinth and claim the title of Network Weaver.",
    reward: { icon: "🕸️", title: "Network Weaver unlocked", desc: "Ability: Bend Traffic to Your Will — Ingress, DNS, and NetworkPolicy mastered" },
    quests: [
      { id: "2-1", title: "Understand ClusterIP, NodePort, and LoadBalancer — draw the traffic path", xp: 30, tags: ["networking", "~2h"], boss: false },
      { id: "2-2", title: "Master in-cluster DNS: how svc-name.namespace.svc.cluster.local resolves", xp: 30, tags: ["coredns", "~1.5h"], boss: false },
      { id: "2-3", title: "Configure nginx-ingress with routing rules and TLS termination", xp: 40, tags: ["ingress", "~2h"], boss: false },
      { id: "2-4", title: "Write a NetworkPolicy that isolates your app's namespace", xp: 30, tags: ["security", "~1.5h"], boss: false },
      { id: "2-5", title: "BOSS: Expose app via Ingress with a real TLS cert via cert-manager", xp: 70, tags: ["cert-manager", "~3h", "BOSS"], boss: true },
    ]
  },
  {
    id: "III",
    cls: "act-III",
    name: "The Helm Forge",
    subtitle: "Charts · Templates · Values · Releases",
    xp: 200,
    lore: "Raw YAML is the weapon of savages. A true engineer forges charts. Descend into the Forge and emerge with a reusable, versioned Helm chart.",
    reward: { icon: "⚒️", title: "Helm Forger unlocked", desc: "Ability: Craft Deployable Artifacts — helm install deploys your app from zero" },
    quests: [
      { id: "3-1", title: "Learn Helm fundamentals: charts, values.yaml, templates, releases", xp: 25, tags: ["helm", "~1.5h"], boss: false },
      { id: "3-2", title: "Master Go templating: conditionals, loops, named templates", xp: 40, tags: ["helm", "~2h"], boss: false },
      { id: "3-3", title: "Implement dev/prod value overrides with -f flags", xp: 30, tags: ["helm", "~1.5h"], boss: false },
      { id: "3-4", title: "Add Helm hooks and a subchart dependency to your chart", xp: 35, tags: ["helm", "~2h"], boss: false },
      { id: "3-5", title: "BOSS: Convert all manifests into a Helm chart — helm install from zero", xp: 70, tags: ["helm", "~4h", "BOSS"], boss: true },
    ]
  },
  {
    id: "IV",
    cls: "act-IV",
    name: "The GitOps Ascension",
    subtitle: "Flux CD · HelmRelease · Debugging · HPA",
    xp: 300,
    lore: "You have mastered the cluster. Now make the cluster master itself. GitOps means the cluster heals itself from Git. Complete the Capstone and ascend to Cluster Warlord.",
    reward: { icon: "👑", title: "Cluster Warlord ★ unlocked", desc: "Ability: GitOps Omniscience — you have achieved mastery of the control plane" },
    quests: [
      { id: "4-1", title: "Understand GitOps: declarative infra, reconciliation loop, drift detection", xp: 30, tags: ["gitops", "~1.5h"], boss: false },
      { id: "4-2", title: "Deep dive Flux CD: HelmRelease, Kustomization, ImageAutomation", xp: 60, tags: ["flux", "~3h"], boss: false },
      { id: "4-3", title: "Master the prod debugging toolkit: describe, logs, exec, events, top", xp: 50, tags: ["kubectl", "~2h"], boss: false },
      { id: "4-4", title: "Configure HPA + resource requests/limits on your app", xp: 40, tags: ["scaling", "~2h"], boss: false },
      { id: "4-5", title: "FINAL BOSS: Deploy via Flux — push image tag, cluster auto-updates with zero manual kubectl", xp: 120, tags: ["flux", "helm", "~5h", "FINAL BOSS"], boss: true },
    ]
  }
];

export const ACHIEVEMENTS = [
  { id: "first-blood", icon: "🥇", name: "First Blood", desc: "Complete your first quest" },
  { id: "crashloop", icon: "💀", name: "CrashLoopSurvivor", desc: "Fix a CrashLoopBackOff in the wild" },
  { id: "webmaster", icon: "🕸️", name: "Webmaster", desc: "Successfully curl your app through Ingress + TLS" },
  { id: "chart-maker", icon: "📦", name: "Chart Maker", desc: "helm install works first try" },
  { id: "the-loop", icon: "🔁", name: "The Loop", desc: "Watch Flux auto-reconcile a drift" },
  { id: "speed-runner", icon: "⚡", name: "Speed Runner", desc: "Complete a boss battle in under 2 hours" },
  { id: "act1-done", icon: "🏰", name: "Act I Complete", desc: "All Architecture Trials cleared" },
  { id: "act2-done", icon: "🌐", name: "Act II Complete", desc: "The Labyrinth has been conquered" },
  { id: "act3-done", icon: "⚒️", name: "Act III Complete", desc: "The Forge has been mastered" },
  { id: "warlord", icon: "👑", name: "Cluster Warlord", desc: "All 4 Acts complete. Max level reached." },
];

export const SPELLS = [
  { name: "Reveal all pods", cmd: "kubectl get pods -A" },
  { name: "Inspect a fallen warrior", cmd: "kubectl describe pod <n>" },
  { name: "Stream battle log", cmd: "kubectl logs <pod> -f" },
  { name: "Enter the pod realm", cmd: "kubectl exec -it <pod> -- sh" },
  { name: "Forge a release", cmd: "helm install <n> ./chart -f values.yaml" },
  { name: "Reforge a release", cmd: "helm upgrade --install <n> ./chart" },
  { name: "Survey the GitOps realm", cmd: "flux get all" },
  { name: "Force Git reconciliation", cmd: "flux reconcile source git flux-system" },
  { name: "Diagnose cluster vitals", cmd: "kubectl top nodes && kubectl top pods" },
];

