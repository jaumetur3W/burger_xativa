type Locale = 'es' | 'va';

const messages: Record<Locale, Record<string, string>> = {
  es: {
    'nav.menu': 'Menú', 'nav.photos': 'Fotos', 'nav.promos': 'Promociones', 'nav.reservations': 'Reservas', 'nav.location': 'Ubicación', 'nav.book': 'Reservar', 'nav.cart': 'Carrito',
    'hero.subtitle': 'Carne a la brasa, queso que se desborda y cero ganas de compartir. La burger que Xàtiva no sabía que necesitaba.', 'hero.menu': 'Ver menú', 'hero.reserve': 'Reservar o pedir',
    'spotlight.eyebrow': 'Selección del chef', 'spotlight.title': 'La Burger', 'spotlight.month': 'del Mes.', 'spotlight.description': 'Doble smash de vacuno, queso ahumado, cebolla confitada lentamente, pepinillo crujiente y nuestra salsa de temporada entre pan brioche tostado. Un equilibrio goloso entre humo, acidez y dulzor.', 'spotlight.add': 'Añadir la edición limitada', 'spotlight.disclaimer': 'Receta y precio de muestra. La disponibilidad de temporada es ilustrativa.', 'spotlight.cartName': 'Burger del Mes',
    'secret.eyebrow': 'Fuera de carta', 'secret.title': 'El menú secreto del chef.', 'secret.description': 'Monta una smash fuera de carta: elige el punto, suma extras y añade tu combinación al carrito.', 'secret.open': 'Crear mi burger', 'secret.dialogTitle': 'Diseña tu smash.', 'secret.cook': 'Punto de la carne', 'secret.rare': 'Jugosa', 'secret.medium': 'Al punto', 'secret.well': 'Hecha', 'secret.extras': 'Extras artesanos', 'secret.note': 'Base smash de vacuno, doble cheddar y salsa de la casa. Precio base: 11,90 €.', 'secret.total': 'Total', 'secret.add': 'Añadir combinación',
    'menu.eyebrow': 'La carta · edición Xàtiva', 'menu.description': 'Producto sin postureo, combinaciones con intención y salsas hechas aquí. Desliza el dedo; luego nos das las gracias.', 'filter.all': 'Todos', 'filter.burgers': 'Burgers', 'filter.starters': 'Entrantes', 'filter.desserts': 'Postres', 'filter.drinks': 'Bebidas',
    'reservation.eyebrow': 'Tu sitio te espera · demo', 'reservation.title': 'Reserva una mesa.', 'reservation.description': 'Déjanos tus datos y te confirmaremos la reserva. Esta versión es una demostración y no envía información a un restaurante.', 'reservation.name': 'Nombre', 'reservation.phone': 'Teléfono', 'reservation.guests': 'Comensales', 'reservation.date': 'Fecha', 'reservation.time': 'Hora', 'reservation.submit': 'Solicitar reserva',
    'architecture.badge': 'Stack Astro', 'architecture.title': 'Arquitectura de la demo', 'architecture.static': '· HTML estático, sin hidratación global.', 'architecture.styles': '· CSS compilado y mobile-first.', 'architecture.vanilla': '· módulos vanilla, sin framework en cliente.', 'architecture.images': '· AVIF/WebP, tamaños explícitos y carga diferida.', 'architecture.disclaimer': 'La puntuación Lighthouse depende del dominio, las imágenes remotas y el entorno de medición; no se declara una puntuación ficticia.', 'secret.close': 'Cerrar menú secreto', 'cart.eyebrow': 'Tu pedido · demo', 'cart.title': 'El carrito', 'cart.empty': 'Todavía no has añadido nada. El antojo empieza en la carta.', 'cart.reward': 'Recompensa de la casa', 'cart.rewardNote': 'Recompensa ilustrativa; se activaría al integrar el sistema de fidelización.', 'cart.total': 'Total orientativo', 'cart.checkout': 'Finalizar pedido', 'cart.paymentNote': 'Pedido de demostración: no se procesa ningún pago.',
  },
  va: {
    'nav.menu': 'Carta', 'nav.photos': 'Fotos', 'nav.promos': 'Promocions', 'nav.reservations': 'Reserves', 'nav.location': 'Ubicació', 'nav.book': 'Reservar', 'nav.cart': 'Cistella',
    'hero.subtitle': 'Carn a la brasa, formatge que es fon i gens de ganes de compartir. L’hamburguesa que Xàtiva encara no sabia que volia.', 'hero.menu': 'Vore la carta', 'hero.reserve': 'Reservar o demanar',
    'spotlight.eyebrow': 'Selecció del xef', 'spotlight.title': 'L’Hamburguesa', 'spotlight.month': 'del Mes.', 'spotlight.description': 'Doble smash de vacú, formatge fumat, ceba confitada a poc a poc, cogombre cruixent i la nostra salsa de temporada entre pa brioix torrat. Un equilibri saborós de fum, acidesa i dolçor.', 'spotlight.add': 'Afegir l’edició limitada', 'spotlight.disclaimer': 'Recepta i preu de mostra. La disponibilitat de temporada és il·lustrativa.', 'spotlight.cartName': 'Hamburguesa del Mes',
    'secret.eyebrow': 'Fora de carta', 'secret.title': 'El menú secret del xef.', 'secret.description': 'Crea una smash fora de carta: tria el punt, afig complements i incorpora la combinació a la cistella.', 'secret.open': 'Crear la meua burger', 'secret.dialogTitle': 'Dissenya la teua smash.', 'secret.cook': 'Punt de la carn', 'secret.rare': 'Sucosa', 'secret.medium': 'Al punt', 'secret.well': 'Feta', 'secret.extras': 'Complements artesans', 'secret.note': 'Base smash de vacú, doble cheddar i salsa de la casa. Preu base: 11,90 €.', 'secret.total': 'Total', 'secret.add': 'Afegir combinació',
    'menu.eyebrow': 'La carta · edició Xàtiva', 'menu.description': 'Producte sense postureig, combinacions amb intenció i salses fetes ací. Tria amb calma; després ja ens donaràs les gràcies.', 'filter.all': 'Tots', 'filter.burgers': 'Burgers', 'filter.starters': 'Entrants', 'filter.desserts': 'Postres', 'filter.drinks': 'Begudes',
    'reservation.eyebrow': 'El teu lloc t’espera · demo', 'reservation.title': 'Reserva una taula.', 'reservation.description': 'Deixa’ns les teues dades i et confirmarem la reserva. Aquesta versió és una demostració i no envia informació a cap restaurant.', 'reservation.name': 'Nom', 'reservation.phone': 'Telèfon', 'reservation.guests': 'Comensals', 'reservation.date': 'Data', 'reservation.time': 'Hora', 'reservation.submit': 'Sol·licitar reserva',
    'architecture.badge': 'Stack Astro', 'architecture.title': 'Arquitectura de la demo', 'architecture.static': '· HTML estàtic, sense hidratació global.', 'architecture.styles': '· CSS compilat i mobile-first.', 'architecture.vanilla': '· mòduls vanilla, sense framework al client.', 'architecture.images': '· AVIF/WebP, mides explícites i càrrega diferida.', 'architecture.disclaimer': 'La puntuació Lighthouse depén del domini, de les imatges remotes i de l’entorn de mesura; no s’hi declara cap puntuació fictícia.', 'secret.close': 'Tancar el menú secret', 'cart.eyebrow': 'La teua comanda · demo', 'cart.title': 'La cistella', 'cart.empty': 'Encara no has afegit res. L’antull comença a la carta.', 'cart.reward': 'Recompensa de la casa', 'cart.rewardNote': 'Recompensa il·lustrativa; s’activaria en integrar el sistema de fidelització.', 'cart.total': 'Total orientatiu', 'cart.checkout': 'Finalitzar comanda', 'cart.paymentNote': 'Comanda de demostració: no es processa cap pagament.',
  },
};

const languageSelect = document.querySelector<HTMLSelectElement>('#language-select');
const localeStorageKey = 'burger-demo-locale-v1';

function getSavedLocale(): Locale {
  try { return localStorage.getItem(localeStorageKey) === 'va' ? 'va' : 'es'; }
  catch { return 'es'; }
}

function applyLocale(locale: Locale) {
  document.documentElement.lang = locale === 'va' ? 'ca-valencia' : 'es';
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const translation = key ? messages[locale][key] : undefined;
    if (translation) element.textContent = translation;
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const translation = key ? messages[locale][key] : undefined;
    if (translation && 'placeholder' in element) (element as HTMLInputElement).placeholder = translation;
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((element) => {
    const key = element.dataset.i18nAria;
    const translation = key ? messages[locale][key] : undefined;
    if (translation) element.setAttribute('aria-label', translation);
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-product-name]').forEach((element) => {
    const key = element.dataset.i18nProductName;
    const translation = key ? messages[locale][key] : undefined;
    if (translation) element.dataset.productName = translation;
  });
  document.title = locale === 'va' ? 'Burger Xàtiva — Demo de portfolio' : 'Burger Xàtiva — Demo de portfolio';
  document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', locale === 'va'
    ? 'Hamburgueses de temporada, ingredients de qualitat i una experiència urbana a Xàtiva. Plantilla de demostració.'
    : 'Hamburguesas de temporada, ingredientes de calidad y una experiencia urbana en Xàtiva. Plantilla de demostración.');
  if (languageSelect) languageSelect.value = locale;
  window.dispatchEvent(new CustomEvent('app:language-change', { detail: { locale } }));
}

applyLocale(getSavedLocale());
languageSelect?.addEventListener('change', () => {
  const locale: Locale = languageSelect.value === 'va' ? 'va' : 'es';
  applyLocale(locale);
  try { localStorage.setItem(localeStorageKey, locale); } catch { /* El selector sigue funcionando sin persistencia. */ }
});
