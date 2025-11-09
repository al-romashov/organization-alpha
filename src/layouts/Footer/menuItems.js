/**
 * если href не указан, то тег ссылки - <a> меняется на <p>
 */

const menuItems = [
  {
    title: 'Контакты',
    socialLinks: [
      {
        label: 'г. Новосибирск, ул. Образцова, 37',
        iconName: 'location-pin',
      },
      {
        label: '+7 (999) 999-99-99',
        iconName: 'phone',
        href: 'tel:+79999999999',
      },
      {
        label: 'info@email.ru',
        iconName: 'email',
        href: 'mailto:info@email.ru',
      },
      {
        label: 'Пн-Пт: 9:00-18:00',
        iconName: 'clock',
      },
    ],
    // href: '/',
  },
  {
    title: 'Направления',
    links: [
      { label: 'Промышленная безопасность', href: '/' },
      { label: 'Охрана труда', href: '/' },
      { label: 'Пожарная безопасность', href: '/' },
      { label: 'Экологическая безопасность', href: '/' },
      { label: 'Энергосбережение', href: '/' },
    ],
    // href: '/',
  },
  {
    title: 'Документы',
    links: [
      { label: 'Лицензия', href: '/' },
      { label: 'Свидетельство', href: '/' },
      { label: 'Нормативные документы', href: '/' },
      { label: 'Образцы заявлений', href: '/' },
    ],
    // href: '/',
  },
  {
    title: 'Полезные ссылки',
    links: [
      { label: 'Расписание занятий', href: '/' },
      { label: 'Электронная запись', href: '/' },
      { label: 'Мониторинг безопасности', href: '/' },
      { label: 'Федеральный реестр', href: '/' },
    ],
    // href: '/',
  },
]

export default menuItems