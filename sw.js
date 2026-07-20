const CACHE = 'wemirror-v2';
const ASSETS = [
  '/wemirror/',
  '/wemirror/index.html',
  '/wemirror/manifest.json',
  '/wemirror/icon-192x192.png',
  '/wemirror/icon-512x512.png',
];

// ── FRASES para notificação (uma por dia do ano) ──
const FRASES_NOTIF = [
  "Você não precisa estar pronto — só precisa começar",
  "O espelho mostra o rosto, mas só você conhece a alma",
  "Um propósito claro ilumina até o caminho mais escuro",
  "A coragem não é ausência de medo — é agir apesar dele",
  "Gratidão transforma o que temos em suficiente",
  "Cada versão melhor de você foi construída na versão anterior",
  "Você é o espelho do que escolhe acreditar sobre si mesmo",
  "Volte para si mesmo — é lá que tudo começa",
  "Quando o porquê é forte, o como aparece",
  "Sua luz não apaga a dos outros — ela convida novas luzes",
  "O que você aprecia, aprecia em valor",
  "Dê o primeiro passo mesmo sem ver toda a escada",
  "Conhecer a si mesmo é o início de toda sabedoria",
  "Propósito não é destino — é a direção que você escolhe todo dia",
  "Presença plena é o presente mais raro que você pode se dar",
  "Você já sobreviveu a tudo que tentou te parar",
  "O crescimento começa no momento em que você decide que pode ser diferente",
  "Sua essência nunca muda — apenas a luz que a ilumina",
  "O mundo precisa daquilo que só você pode oferecer",
  "Gratidão não é fingir que tudo está bem — é reconhecer o bem que existe",
  "Coragem é o músculo que cresce quando você o usa",
  "Você é o único espelho que não distorce a verdade",
  "Faça algo hoje que o seu eu do futuro agradeça",
  "O agora é o único lugar onde a vida realmente acontece",
  "Não compare seu capítulo 3 com o capítulo 20 de alguém",
  "Ser autêntico é o ato mais corajoso que existe",
  "Uma vida com propósito não precisa ser perfeita — precisa ser verdadeira",
  "Cada amanhecer é uma segunda chance que não precisava ter sido dada",
  "Você se torna aquilo que pratica com consistência",
  "O que você projeta no mundo, o mundo devolve amplificado",
  "A vida começa onde a zona de conforto termina",
  "Seja curioso sobre si mesmo como você seria sobre um mistério fascinante",
  "Viva devagar o suficiente para notar o que importa",
  "Você é uma obra em andamento — e isso é bonito",
  "Seu reflexo mais honesto não está no espelho — está nas suas ações",
  "Não existe crescimento sem o desconforto de se enxergar de verdade",
  "Cada dia vivido é um presente que não pode ser devolvido",
  "O outro lado do medo é onde sua vida acontece de verdade",
  "Progrida — nem que seja um milímetro por dia",
  "Cuide da sua imagem interior — ela molda tudo que está fora",
  "Você tem camadas que nem você mesmo explorou ainda",
  "Seu legado é construído nas escolhas que ninguém vê",
  "Uma mente grata é uma mente em paz",
  "Seja corajoso o suficiente para ser você mesmo",
  "Cada obstáculo foi um professor disfarçado",
  "O que existe dentro de você inevitavelmente aparece fora de você",
  "Agradeça antes de receber — essa é a verdadeira abundância",
  "A disciplina de hoje é a liberdade de amanhã",
  "Você é mais forte do que qualquer desafio que já enfrentou",
  "Seja o reflexo que inspira outros a se enxergarem melhor",
  "Nenhuma máscara é mais pesada do que a que usamos para nós mesmos",
  "O que te faz sentir vivo é o fio condutor do seu propósito",
  "Cada respiração é uma afirmação de que você ainda tem muito a fazer aqui",
  "Crescer exige soltar versões antigas de si mesmo — e isso é libertador",
  "Você é o espelho — e o que reflete é sempre sua escolha",
  "Tenha uma razão maior do que o medo",
  "A gratidão abre portas que o esforço sozinho não consegue abrir",
  "Aja agora — o momento perfeito nunca vai chegar",
  "Você carrega dentro de si respostas que ainda não fez as perguntas certas",
  "O que você constrói dentro reflete para fora — sem exceção",
  "Não espere a inspiração — construa o hábito e a inspiração vem junto",
  "Viver com gratidão é uma forma de honrar o que te foi dado",
  "O único limite que importa é o que você coloca em si mesmo",
  "Seja tão autêntico que seu reflexo te surpreenda",
  "Você não precisa se entender completamente para se aceitar inteiramente",
  "Cada escolha revela um pedaço de quem você está escolhendo ser",
  "O maior risco é nunca arriscar nada",
  "Gratidão é a prática que transforma o ordinário em extraordinário",
  "Crescimento real acontece devagar e em silêncio",
  "Sua singularidade não é um defeito — é seu maior recurso",
  "O que você emana é o que você atrai — cuide da sua energia",
  "Não existe atalho para uma vida que valha a pena",
  "Cada vez que você age com coragem, expande o que é possível para você",
  "Você tem muito mais do que percebe quando para para contar",
  "O maior investimento que existe é o investimento em si mesmo",
  "Sua voz interior é a mais honesta que você vai ouvir hoje",
  "O que você faria mesmo sem ser pago por isso revela seu propósito",
  "Cair não é fracasso — recusar-se a levantar é",
  "Cada amanhecer é uma página em branco — qual história você vai escrever hoje?",
  "Você tem uma frequência única — não tente sintonizar a de ninguém",
  "Propósito é a âncora que te mantém firme quando tudo ao redor oscila",
  "Estar vivo hoje já é um milagre que merece reverência",
  "A pessoa que você quer ser já existe dentro de você",
  "Seu reflexo muda quando você muda a forma de se olhar",
  "Você não precisa de permissão para viver o que te faz sentido",
  "Cada dificuldade superada merece tanto reconhecimento quanto cada conquista",
  "Não existe platô permanente — existe falta de novo desafio",
  "O mundo ao redor reflete o mundo que há dentro de você",
  "A coragem de recomeçar é tão grande quanto a de começar",
  "Você sabe mais sobre si mesmo do que acredita saber",
  "O que dá sentido à sua manhã determina o que você constrói ao longo do dia",
  "Cada aprendizado que dói é o que mais permanece",
  "Você inspira sem perceber — seu exemplo fala mais alto que suas palavras",
  "Não confunda seus medos com seus limites — eles são coisas bem diferentes",
  "O que você quer construir merece que você enfrente o que te assusta",
  "Gratidão é a linguagem que o coração usa quando está em paz",
  "Você é mais capaz do que qualquer versão passada poderia imaginar",
  "Quem você está se tornando é mais importante do que quem você foi",
  "Sua presença reflete algo único — não diminua sua luz para caber em lugares menores",
  "Cada vez que você escolhe a luz, você se torna um reflexo dela para o mundo",
];

function fraseDoDia() {
  const now = new Date();
  const inicio = new Date(now.getFullYear(), 0, 0);
  const dia = Math.floor((now - inicio) / 86400000);
  return FRASES_NOTIF[dia % FRASES_NOTIF.length];
}

// ── INSTALL ──
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

// ── ACTIVATE ──
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
  agendarNotificacao();
});

// ── FETCH ──
self.addEventListener('fetch', e => {
  if (e.request.url.includes('workers.dev') || e.request.url.includes('elevenlabs')) return;
  e.respondWith(caches.match(e.request).then(c => c || fetch(e.request)));
});

// ── NOTIFICAÇÕES ──
self.addEventListener('message', e => {
  if (e.data && e.data.tipo === 'agendar') {
    const { hora, minuto } = e.data;
    self.horarioNotif = { hora, minuto };
    agendarNotificacao();
  }
});

function agendarNotificacao() {
  const config = self.horarioNotif || { hora: 8, minuto: 0 };
  const agora = new Date();
  const proxima = new Date();
  proxima.setHours(config.hora, config.minuto, 0, 0);
  if (proxima <= agora) proxima.setDate(proxima.getDate() + 1);
  const delay = proxima - agora;

  setTimeout(() => {
    dispararNotificacao();
    setInterval(dispararNotificacao, 86400000);
  }, delay);
}

function dispararNotificacao() {
  const frase = fraseDoDia();
  self.registration.showNotification('WE MIRROR® — Sua frase do dia', {
    body: frase,
    icon: '/wemirror/icon-192x192.png',
    badge: '/wemirror/icon-72x72.png',
    vibrate: [200, 100, 200],
    tag: 'frase-diaria',
    renotify: true,
    data: { url: '/wemirror/' },
  });
}

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data.url));
});
