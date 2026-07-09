/* ═══════════════════════════════════════════════════════════════
   Dev Atlas — _include.js
   Injects shared nav + footer, theme toggle, hamburger menu,
   TOC scroll-spy and sidebar active state on every page.
   ═══════════════════════════════════════════════════════════════ */

;(function () {

  /* ── 1. Page registry ─────────────────────────────────────── */
  const PAGES = [
    { file: 'index.html',       label: 'Home'           },
    { file: 'programacao.html', label: 'Programação'    },
    { file: 'logica.html',      label: 'Lógica'         },
    { file: 'fundamentos.html', label: 'Fund. Web'      },
    { file: 'html.html',        label: 'HTML'           },
    { file: 'css.html',         label: 'CSS'            },
    { file: 'javascript.html',  label: 'JavaScript'     },
    { file: 'react.html',       label: 'React'          },
    { file: 'php.html',         label: 'PHP'            },
    { file: 'git.html',         label: 'Git'            },
    { file: 'ferramentas.html', label: 'Ferramentas'    },
  ]

  /* ── 2. Current page detection ────────────────────────────── */
  const currentFile = window.location.pathname.split('/').pop() || 'index.html'

  /* ── 3. Apply stored theme IMMEDIATELY (before paint) ──────── */
  const storedTheme = localStorage.getItem('da-theme') || 'dark'
  document.documentElement.setAttribute('data-theme', storedTheme)

  /* ── 4. Build nav HTML ────────────────────────────────────── */
  const navLinksHTML = PAGES.map(p => {
    const active = (p.file === currentFile) ? ' class="active"' : ''
    return `<li><a href="${p.file}"${active}>${p.label}</a></li>`
  }).join('\n        ')

  const navHTML = `
<nav class="topnav" id="topnav">
  <button class="nav-hamburger" id="nav-hamburger" aria-label="Abrir menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
  <a href="index.html" class="nav-logo">🌐 Dev <span>Atlas</span></a>
  <ul class="nav-links" id="nav-links" role="navigation" aria-label="Menu principal">
    ${navLinksHTML}
  </ul>
  <button class="theme-toggle" id="theme-toggle" aria-label="Alternar tema claro/escuro">
    <svg class="theme-icon theme-icon--moon" width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
    <svg class="theme-icon theme-icon--sun" width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         aria-hidden="true">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  </button>
</nav>
<div class="nav-overlay" id="nav-overlay" aria-hidden="true"></div>`

  /* ── 5. Build footer HTML ─────────────────────────────────── */
  const isHome = (currentFile === 'index.html' || currentFile === '')
  const rawTitle = document.title || 'Dev Atlas'
  const pageLabel = rawTitle.includes('—') ? rawTitle.split('—')[0].trim() : rawTitle

  const footerLinksHTML = PAGES
    .filter(p => p.file !== 'index.html')
    .map(p => `<a href="${p.file}">${p.label}</a>`)
    .join('\n      ')

  const footerHTML = `
<footer class="page-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <a href="index.html" class="nav-logo">🌐 Dev <span>Atlas</span></a>
      <p>Seu mapa para o mundo do desenvolvimento web.</p>
    </div>
    <nav class="footer-links" aria-label="Links de navegação do rodapé">
      ${footerLinksHTML}
    </nav>
    <div class="footer-copy">
      Dev Atlas &copy; 2026${!isHome ? ' &middot; ' + pageLabel : ''}
    </div>
  </div>
</footer>`

  /* ── 6. Inject nav & footer ───────────────────────────────── */
  document.body.insertAdjacentHTML('afterbegin', navHTML)
  document.body.insertAdjacentHTML('beforeend', footerHTML)

  /* ── 7. Hamburger menu ────────────────────────────────────── */
  const hamburger = document.getElementById('nav-hamburger')
  const navLinks  = document.getElementById('nav-links')
  const overlay   = document.getElementById('nav-overlay')

  function isDrawerMode() {
    // hamburger is display:flex only when ≤1050px (CSS hides it on desktop)
    return getComputedStyle(hamburger).display !== 'none'
  }

  function toggleMenu(forceOpen) {
    if (!isDrawerMode()) return   // do nothing on desktop

    const isCurrentlyOpen = navLinks.classList.contains('is-open')
    const willOpen = (forceOpen !== undefined) ? forceOpen : !isCurrentlyOpen

    hamburger.setAttribute('aria-expanded', String(willOpen))
    hamburger.classList.toggle('is-open', willOpen)
    overlay.classList.toggle('is-show', willOpen)
    navLinks.classList.toggle('is-open', willOpen)
    // CSS handles pointer-events via .is-open — no inline style needed
  }

  // Reset when resizing back to desktop
  window.addEventListener('resize', () => {
    if (!isDrawerMode()) {
      navLinks.classList.remove('is-open')
      overlay.classList.remove('is-show')
      hamburger.classList.remove('is-open')
      hamburger.setAttribute('aria-expanded', 'false')
      document.body.classList.remove('menu-open')
    }
  })

  hamburger.addEventListener('click', () => toggleMenu())
  overlay.addEventListener('click', () => toggleMenu(false))

  // Close on nav link click (useful on mobile)
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => toggleMenu(false))
  })

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') toggleMenu(false)
  })

  /* ── 8. Theme toggle ──────────────────────────────────────── */
  const themeBtn = document.getElementById('theme-toggle')

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('da-theme', theme)
    themeBtn.setAttribute('aria-label',
      theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro')
  }

  // Apply again now that the button exists (initial apply was pre-DOM)
  applyTheme(storedTheme)

  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme')
    applyTheme(current === 'dark' ? 'light' : 'dark')
  })

  /* ── 9. TOC scroll-spy ────────────────────────────────────── */
  const tocPanel = document.querySelector('.toc-panel')
  if (tocPanel) {
    const tocLinks = Array.from(tocPanel.querySelectorAll('a[href^="#"]'))

    if (tocLinks.length > 0) {
      const targetMap = new Map()
      tocLinks.forEach(a => {
        const id = a.getAttribute('href').slice(1)
        const el = document.getElementById(id)
        if (el) targetMap.set(el, a)
      })

      let activeLink = null

      function setActive(link) {
        if (link === activeLink) return
        if (activeLink) {
          activeLink.removeAttribute('data-toc-active')
          activeLink.style.color = ''
          activeLink.style.fontWeight = ''
        }
        if (link) {
          link.setAttribute('data-toc-active', '')
          link.style.color = 'var(--accent)'
          link.style.fontWeight = '600'
        }
        activeLink = link
      }

      const observer = new IntersectionObserver(entries => {
        // Find the topmost intersecting section
        let topEntry = null
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!topEntry || entry.boundingClientRect.top < topEntry.boundingClientRect.top) {
              topEntry = entry
            }
          }
        })
        if (topEntry) {
          setActive(targetMap.get(topEntry.target) || null)
        }
      }, {
        rootMargin: '-58px 0px -70% 0px',
        threshold: 0
      })

      targetMap.forEach((_, el) => observer.observe(el))
    }
  }

  /* ── 10. Sidebar section scroll-spy (same sections) ────────── */
  const sidebar = document.querySelector('.sidebar')
  if (sidebar) {
    const sidebarSectionLinks = Array.from(
      sidebar.querySelectorAll('a[href^="#"]')
    )

    if (sidebarSectionLinks.length > 0) {
      const sidebarMap = new Map()
      sidebarSectionLinks.forEach(a => {
        const id = a.getAttribute('href').slice(1)
        const el = document.getElementById(id)
        if (el) sidebarMap.set(el, a)
      })

      let activeSideLink = null

      function setSideActive(link) {
        if (link === activeSideLink) return
        if (activeSideLink) {
          activeSideLink.classList.remove('active')
        }
        if (link) link.classList.add('active')
        activeSideLink = link
      }

      const sideObserver = new IntersectionObserver(entries => {
        let topEntry = null
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!topEntry || entry.boundingClientRect.top < topEntry.boundingClientRect.top) {
              topEntry = entry
            }
          }
        })
        if (topEntry) {
          setSideActive(sidebarMap.get(topEntry.target) || null)
        }
      }, {
        rootMargin: '-58px 0px -70% 0px',
        threshold: 0
      })

      sidebarMap.forEach((_, el) => sideObserver.observe(el))
    }

    // Mark the current page in sidebar module links
    sidebar.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href')
      if (href && !href.startsWith('#') && href.split('?')[0] === currentFile) {
        a.classList.add('active')
      }
    })
  }

})()
