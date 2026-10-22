# Burger Xàtiva · Demo de portfolio

Landing page estática con Astro y Tailwind CSS 4. La identidad, dirección, horario, precios, enlaces e imágenes son ilustrativos; sustitúyelos por datos autorizados antes de publicar.

## Desarrollo

```sh
npm install
npm run dev
```

## Producción

```sh
npm run build
npm run preview
```

### Personalización

- Ajusta el contenido en `src/components/` y `src/pages/index.astro`.
- Cambia URL canónica y datos Schema.org en `src/layouts/BaseLayout.astro` y `astro.config.mjs`.
- Sustituye imágenes remotas por archivos optimizados en `public/images/` para una publicación real.
- Reemplaza dirección, horario, teléfono, mapa, enlaces y etiquetas demo con información verificada.
- Configura el `PLACE_ID_DEMO` de `src/components/GoogleReviews.astro` para abrir el formulario de reseñas del establecimiento.
- El QR apunta a la URL actual y se genera mediante un servicio externo; para producción, crea el PNG/SVG local con el dominio definitivo.
- Los formularios de reserva y Club VIP, los pedidos, la recompensa y el seguimiento son simulaciones del lado del cliente. Conecta un backend antes de usarlos con clientes reales.
- El rastreador de delivery acepta el teléfono de prueba `000 000 000` y simula los cuatro estados del envío.
