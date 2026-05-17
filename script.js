const messages = [
  {
    title: "Dia 1: Molta sort avui!",
    image: "assets/dia1.gif",
    text: "Hola amoor, avui és el primer dia d'aquest calendari que he preparat per a tu. Avui es 18, és el dia que fas la presentació del teu projecte, em posa una miqueta trista no poder anar a veure't, però sé que ho faràs genial. T'estimo moltíssim i estic molt orgullosa de tu, molta sort avui!"
  },
  {
    title: "Dia 2: Estar amb tu",
    image: "assets/dia2.gif",
    text: "Bon dia amor (o bona tarda, depèn de quan obris aquest sobre), primer de tot: felicitats!! Ja has acabat el projecte i estic segura de que t'ha anat genial. Com començo a treballar aquesta setmana potser no ens veiem tant (o potser si), però et trobo molt a faltaaar, a veure si em vens a buscar algun dia."
  },
  {
    title: "Dia 3: T'estimo moltissím",
    image: "assets/dia3.gif",
    text: "Holaa amor, avui és ja el tercer dia d'aquest calendari. Vull que sàpigues que t'estimo moltíssim, i que estic molt agraïda de tindre't a la meva vida. Espero que aquest calendari et faci somriure com ho estic fent jo mentre t'ho escric. Ets la millor persona que conec i cada dia em fas més feliç."
  },
  {
    title: "Dia 4: Raons per estimar-te",
    image: "assets/dia4.gif",
    text: "Ja estem al dia 4, dijous! I avui toca recordar-te les raons per les quals t'estimo tant, així que començem: La teva forma de ser, la teva manera de veure el món, el teu somriure, els teus ulls, la teva passió per les coses que t'agraden, la teva forma de cuidar-me, la forma en la que et rius, el com sempre t'esforçes per fer-me feliç... podria seguir així tot el dia, però en definitiva: t'estimo per ser tu. Espero que avui tinguis un dia genial amor."
  },
  {
    title: "Dia 5: Gràcies per ser tu",
    image: "assets/dia5.gif",
    text: "Bon diaa amor, avui és divendres, i estem ja al dia 5 d'aquest calendari. Avui només vull donar-te les gràcies per ser tu, per ser la persona tan increïble i maravellosa que ets, per fer-me sentir tan feliç amb tu com mai ho he sigut i per fer que cada dia sigui especial només amb la teva presència. Gràcies per ser tu, t'estimo moltíssim. Molta sort el dia d'avui amor <3"
  },
  {
    title: "Dia 6: Meitat de calendari!",
    image: "assets/dia6.gif",
    text: "Holaaa amooor, ja estem a dissabte! Avui crec que surts de festa amb els teus amics així que disfruta molt!! Ja estem a la meitat del calendari, espero que t'estigui agradant. Avui no tinc massa a dir-te, passat-ho molt bé amb els teus amics si surts, i si no, disfruta igualment del teu dia! T'estimo moltíssim amor."
  },
  {
    title: "Dia 7: Sempre aquí per tu",
    image: "assets/dia7.gif",
    text: "Estem ja a diumenge amor! Que ràpid que ha passat la setmana, no? Avui només vull recordar-te que sempre estaré aquí per tu, en els bons i en els mals moments, per celebrar les teves victòries i per donar-te suport quan les coses no vagin tan bé. Ets la persona més important de la meva vida i sempre podràs comptar amb mi per a qualsevol cosa. T'estimo moltissim amor meu i que sàpigues que estic super orgullosa de tu. T'estimo moltíssim."
  },
  {
    title: "Dia 8: Molta sort en la teva setmana!",
    image: "assets/dia8.gif",
    text: "Hola amooor, avui és dilluns, i ja estem al dia 8 d'aquest calendari. Molta sort avui en la teva feina amor, espero que tinguis una setmana genial, tu pots amb tot. S'apropa el meu cumple i potser estas una mica estressat per no saber que fer-me. No et preocupis, et vull recordar que el que més em fa ilusió és passar el dia amb tu, fer algun plan xulo i que sobretot hagi pensat en mi. T'estimo i ja veuràs que amb qualsevol cosa que em regalis em farà molta il·lusió <3"
  },
  {
    title: "Dia 9: S'apropa el final!",
    image: "assets/dia9.gif",
    text: "Avuii ja es el dia 9, això significa que només queden 3 dies per que s'acabi aquest calendari, però no et preocupis, que si veig que t'està agradant et farè més coses així en un futur. Avui és dimarts, i espero que o ens haguem vist el finde o m'estiguis venint a buscar perquè sino ploraré molt del que et trobaré a faltar. Espero que la teva setmana hagi començat bé i que la resta de dies continuin així. Tu pots amor! T'estiiimoooo."
  },
  {
    title: "Dia 10: Cosetes boniques",
    image: "assets/dia10.gif",
    text: "Holaa amoor, avui és dimecres, el dia 10 del calendari. Molt honestament se m'estan acabant les idees, però saps que no em costa gens fer? ESCRIURE'T COSES BONIQUES. Així que aquí va: ets la persona més increïble del món, la meva coseta preciosa, l'amor de la meva vida, el que més estimo en aquest univers, la persona amb la que vull compartir la meva vida, la meva mitja taronja, el meu cel, el meu món, el meu tot. T'estimo com a res en aquest món <3"
  },
  {
    title: "Dia 11: Ets lo millor que m'ha passat",
    image: "assets/dia11.gif",
    text: "Bon dia mi vida, avui em ve de gust ser carinyosa. Vull que sàpigues que ets lo millor que m'ha passat mai, i que cada dia al teu costat em fa la persona més feliç del món. Gràcies per ser com ets, per fer-me sentir tan especial i estimada, per decidir compartir la teva vida amb mi i per fer que cada dia em llevi amb un somriure només pensant en tu. T'estimo moltíssim amor meu, i espero que avui tinguis un dia genial, perque t'ho mereixes i molt<3"
  },
  {
    title: "Dia 12: Ja s'acaba el calendari",
    image: "assets/dia12.gif",
    text: "Amooor, avui és el dia final d'aquest calendari, ja s'ha acabat... Espero que t'hagi agradat molt! ja et farè fer-me una rewiew (espero que em posis mínim 4 estrelles eh), avui es el meu cumple, tinc moltes ganes de passar-lo amb tu<3 Espero que t'hagi agradat aquest mini regal, era més una prova que res pero m'he divertit molt fent-ho. T'estimo i ens veiem aquesta tarda amor! Adeuuu! <3"
  },
  {
    title: "Instruccions",
    text: "Hola amor, en aquesta página tens 12 sobres per obrir, un per cada dia. El primer sobre és el de la primera fila começant per la esquerra i has d'anar obrint els del costat cada dia que passi, veuras que encara que li donguis a la resta de sobres fins que no sigui el seu dia corresponent no s'obrira jsjs. He fet aixo com a prova per a futurs regals, però espero que t'agradi!"
  }
];

const envelopes = document.querySelectorAll('.envelope');
const modalOverlay = document.getElementById('modalOverlay');
const closeButton = document.getElementById('closeButton');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const instructionsButton = document.querySelector('.instructions-button');
const envelopeImageSrc = 'assets/envelope.png';

function openEnvelope(index) {
  const message = messages[index];
  modalTitle.textContent = message.title;

  if (message.image) {
    modalMessage.classList.add('has-gif');
    modalMessage.innerHTML = `
      <img src="${message.image}" alt="${message.title}" class="modal-gif" />
      <span>${message.text}</span>
    `;
  } else {
    modalMessage.classList.remove('has-gif');
    modalMessage.textContent = message.text;
  }

  modalOverlay.classList.remove('hidden');
}

function closeModal() {
  modalOverlay.classList.add('hidden');
}

envelopes.forEach((envelope) => {
  const index = Number(envelope.dataset.index);
  envelope.innerHTML = `<img src="${envelopeImageSrc}" class="envelope-art" alt="Sobre de carta pixel art" />`;
  envelope.addEventListener('click', () => {
    openEnvelope(index);
  });
});

if (instructionsButton) {
  instructionsButton.addEventListener('click', () => {
    openEnvelope(messages.length - 1);
  });
}

closeButton.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
    closeModal();
  }
});
const DAYS_TOTAL = 12;
const START_DATE = new Date(2026, 4, 18); // May 18, 2026

function getTodayIndex() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const start = new Date(START_DATE);
  start.setHours(0, 0, 0, 0);
  const diffDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  return diffDays;
}

function openEnvelope(index) {
  if (index >= DAYS_TOTAL) return;

  const todayIndex = getTodayIndex();
  if (index > todayIndex) {
    return;
  }

  const opened = JSON.parse(localStorage.getItem('opened') || '{}');
  opened[index] = true;
  localStorage.setItem('opened', JSON.stringify(opened));
  updateEnvelopeStates();

  const message = messages[index];
  modalTitle.textContent = message.title;

  if (message.image) {
    modalMessage.classList.add('has-gif');
    modalMessage.innerHTML = `
      <img src="${message.image}" alt="${message.title}" class="modal-gif" />
      <span>${message.text}</span>
    `;
  } else {
    modalMessage.classList.remove('has-gif');
    modalMessage.textContent = message.text;
  }

  modalOverlay.classList.remove('hidden');
}

function updateEnvelopeStates() {
  const todayIndex = getTodayIndex();
  const opened = JSON.parse(localStorage.getItem('opened') || '{}');

  envelopes.forEach((envelope) => {
    const index = Number(envelope.dataset.index);
    const isAvailable = index <= todayIndex;
    const isOpened = !!opened[index];

    if (isAvailable) {
      envelope.classList.remove('locked');
      envelope.disabled = false;
    } else {
      envelope.classList.add('locked');
      envelope.disabled = true;
    }

    if (isOpened) {
      envelope.classList.add('opened');
    } else {
      envelope.classList.remove('opened');
    }
  });
}
if (instructionsButton) {
  instructionsButton.addEventListener('click', () => {
    const message = messages[messages.length - 1];
    modalTitle.textContent = message.title;
    modalMessage.classList.remove('has-gif');
    modalMessage.textContent = message.text;
    modalOverlay.classList.remove('hidden');
  });
}