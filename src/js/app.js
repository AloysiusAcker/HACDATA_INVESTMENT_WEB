/**
 * HACDATA Investment Memorandum - Main Application
 * Router, Navigation, Modal, and UI Interactions
 */

(function() {
  'use strict';

  // ========================================
  // CONFIGURATION
  // ========================================
  const CONFIG = {
    sections: [
      { id: '00', slug: 'indice', title: 'Índice', file: 'pages/00_indice.html' },
      { id: '01', slug: 'resumen-ejecutivo', title: 'Resumen Ejecutivo', file: 'pages/01_resumen_ejecutivo.html' },
      { id: '02', slug: 'la-empresa', title: 'La Empresa', file: 'pages/02_la_empresa.html' },
      { id: '03', slug: 'problema-oportunidad', title: 'Problema y Oportunidad', file: 'pages/03_problema_oportunidad.html' },
      { id: '04', slug: 'propuesta-valor', title: 'Propuesta de Valor', file: 'pages/04_propuesta_valor.html' },
      { id: '05', slug: 'producto-servicios', title: 'Producto y Servicios', file: 'pages/05_producto_servicios.html' },
      { id: '06', slug: 'modelo-negocio', title: 'Modelo de Negocio', file: 'pages/06_modelo_negocio.html' },
      { id: '07', slug: 'mercado-competencia', title: 'Mercado y Competencia', file: 'pages/07_mercado_competencia.html' },
      { id: '08', slug: 'go-to-market', title: 'Go-to-Market', file: 'pages/08_go_to_market.html' },
      { id: '09', slug: 'operaciones', title: 'Operaciones', file: 'pages/09_operaciones.html' },
      { id: '10', slug: 'tecnologia', title: 'Tecnología', file: 'pages/10_tecnologia.html' },
      { id: '11', slug: 'organizacion', title: 'Organización', file: 'pages/11_organizacion.html' },
      { id: '12', slug: 'plan-financiero', title: 'Plan Financiero', file: 'pages/12_plan_financiero.html' },
      { id: '13', slug: 'riesgos', title: 'Riesgos', file: 'pages/13_riesgos.html' },
      { id: '14', slug: 'tesis-inversion', title: 'Tesis de Inversión', file: 'pages/14_tesis_inversion.html' },
      { id: '15', slug: 'anexos', title: 'Anexos', file: 'pages/15_anexos.html' }
    ],
    defaultSection: '00',
    animationDuration: 400
  };

  // ========================================
  // DOM ELEMENTS
  // ========================================
  const elements = {
    contentContainer: document.getElementById('content-container'),
    navList: document.getElementById('nav-list'),
    progressBar: document.getElementById('progress-bar'),
    scrollToTop: document.getElementById('scroll-to-top'),
    mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
    sidebar: document.getElementById('sidebar'),
    sidebarOverlay: document.getElementById('sidebar-overlay'),
    modalBackdrop: document.getElementById('modal-backdrop'),
    modal: document.getElementById('viz-modal'),
    modalClose: document.getElementById('modal-close'),
    modalIframe: document.getElementById('modal-iframe'),
    modalVizId: document.getElementById('modal-viz-id'),
    modalVizTitle: document.getElementById('modal-viz-title')
  };

  // ========================================
  // STATE
  // ========================================
  let state = {
    currentSection: null,
    isLoading: false,
    isMobileMenuOpen: false,
    isModalOpen: false,
    loadedSections: new Map()
  };

  // ========================================
  // ROUTER
  // ========================================
  const Router = {
    init() {
      // Handle initial route
      const hash = window.location.hash.slice(1) || CONFIG.defaultSection;
      const section = this.findSectionBySlug(hash) || this.findSectionById(CONFIG.defaultSection);
      this.navigate(section.id, false);

      // Listen for hash changes
      window.addEventListener('hashchange', () => {
        const hash = window.location.hash.slice(1);
        const section = this.findSectionBySlug(hash);
        if (section) {
          this.navigate(section.id, false);
        }
      });
    },

    findSectionById(id) {
      return CONFIG.sections.find(s => s.id === id);
    },

    findSectionBySlug(slug) {
      return CONFIG.sections.find(s => s.slug === slug);
    },

    async navigate(sectionId, updateHash = true) {
      if (state.isLoading || state.currentSection === sectionId) return;

      const section = this.findSectionById(sectionId);
      if (!section) return;

      state.isLoading = true;
      state.currentSection = sectionId;

      // Update URL hash
      if (updateHash) {
        window.location.hash = section.slug;
      }

      // Update navigation active state
      Navigation.setActive(sectionId);

      // Close mobile menu if open
      if (state.isMobileMenuOpen) {
        MobileMenu.close();
      }

      // Load section content
      await ContentLoader.load(section);

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });

      state.isLoading = false;
    }
  };

  // ========================================
  // CONTENT LOADER
  // ========================================
  const ContentLoader = {
    async load(section) {
      // Check cache
      if (state.loadedSections.has(section.id)) {
        this.render(state.loadedSections.get(section.id));
        return;
      }

      // Show loading state
      this.showLoading();

      try {
        const response = await fetch(section.file);
        if (!response.ok) throw new Error(`Failed to load ${section.file}`);

        const html = await response.text();
        state.loadedSections.set(section.id, html);

        // Small delay for smooth transition
        await this.delay(100);
        this.render(html);
      } catch (error) {
        console.error('Error loading section:', error);
        this.showError(section);
      }
    },

    render(html) {
      elements.contentContainer.innerHTML = html;

      // Initialize visualizations
      Visualizations.init();

      // Trigger animations
      Animations.animateIn();
    },

    showLoading() {
      elements.contentContainer.innerHTML = `
        <div class="section">
          <div class="section-header">
            <div class="section-meta">
              <span class="badge badge-orange">Cargando...</span>
            </div>
          </div>
          <div class="content">
            <div class="skeleton skeleton-title"></div>
            <div class="skeleton skeleton-text" style="width: 100%"></div>
            <div class="skeleton skeleton-text" style="width: 90%"></div>
            <div class="skeleton skeleton-text" style="width: 95%"></div>
            <div class="skeleton skeleton-text" style="width: 85%"></div>
            <div class="skeleton skeleton-card mt-3xl"></div>
          </div>
        </div>
      `;
    },

    showError(section) {
      elements.contentContainer.innerHTML = `
        <div class="section">
          <div class="section-header">
            <span class="section-number">Error</span>
            <h1>No se pudo cargar la sección</h1>
          </div>
          <div class="content">
            <p>Hubo un problema al cargar "${section.title}". Por favor, intenta de nuevo.</p>
            <button class="btn btn-primary mt-xl" onclick="location.reload()">
              Recargar página
            </button>
          </div>
        </div>
      `;
    },

    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  };

  // ========================================
  // NAVIGATION
  // ========================================
  const Navigation = {
    init() {
      // Add click handlers to nav links
      elements.navList.addEventListener('click', (e) => {
        const link = e.target.closest('.nav-link');
        if (link) {
          e.preventDefault();
          const sectionId = link.dataset.section;
          Router.navigate(sectionId);
        }
      });

      // Keyboard navigation
      elements.navList.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          const link = e.target.closest('.nav-link');
          if (link) {
            e.preventDefault();
            const sectionId = link.dataset.section;
            Router.navigate(sectionId);
          }
        }
      });
    },

    setActive(sectionId) {
      const links = elements.navList.querySelectorAll('.nav-link');
      links.forEach(link => {
        link.classList.toggle('active', link.dataset.section === sectionId);
      });
    }
  };

  // ========================================
  // MOBILE MENU
  // ========================================
  const MobileMenu = {
    init() {
      elements.mobileMenuToggle.addEventListener('click', () => {
        state.isMobileMenuOpen ? this.close() : this.open();
      });

      elements.sidebarOverlay.addEventListener('click', () => {
        this.close();
      });

      // Close on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && state.isMobileMenuOpen) {
          this.close();
        }
      });
    },

    open() {
      state.isMobileMenuOpen = true;
      elements.mobileMenuToggle.classList.add('active');
      elements.sidebar.classList.add('open');
      elements.sidebarOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    },

    close() {
      state.isMobileMenuOpen = false;
      elements.mobileMenuToggle.classList.remove('active');
      elements.sidebar.classList.remove('open');
      elements.sidebarOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // ========================================
  // VISUALIZATIONS
  // ========================================
  const Visualizations = {
    init() {
      // Find all expand buttons
      const expandButtons = elements.contentContainer.querySelectorAll('.viz-expand-btn');
      expandButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const card = e.target.closest('.viz-card');
          if (card) {
            this.openModal(card);
          }
        });
      });

      // Lazy load iframes
      this.lazyLoadIframes();
    },

    openModal(card) {
      const id = card.querySelector('.viz-card-id')?.textContent || '';
      const title = card.querySelector('.viz-card-title')?.textContent || '';
      const iframe = card.querySelector('iframe');
      const src = iframe?.src || iframe?.dataset.src;

      if (!src) return;

      elements.modalVizId.textContent = id;
      elements.modalVizTitle.textContent = title;
      elements.modalIframe.src = src;

      Modal.open();
    },

    lazyLoadIframes() {
      const iframes = elements.contentContainer.querySelectorAll('.viz-card-content iframe[data-src]');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const iframe = entry.target;
            iframe.src = iframe.dataset.src;
            iframe.removeAttribute('data-src');
            observer.unobserve(iframe);
          }
        });
      }, { rootMargin: '100px' });

      iframes.forEach(iframe => observer.observe(iframe));
    }
  };

  // ========================================
  // MODAL
  // ========================================
  const Modal = {
    init() {
      elements.modalClose.addEventListener('click', () => this.close());
      elements.modalBackdrop.addEventListener('click', () => this.close());

      // Close on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && state.isModalOpen) {
          this.close();
        }
      });
    },

    open() {
      state.isModalOpen = true;
      elements.modalBackdrop.classList.add('active');
      elements.modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    },

    close() {
      state.isModalOpen = false;
      elements.modalBackdrop.classList.remove('active');
      elements.modal.classList.remove('active');
      document.body.style.overflow = '';

      // Clear iframe
      setTimeout(() => {
        elements.modalIframe.src = '';
      }, CONFIG.animationDuration);
    }
  };

  // ========================================
  // SCROLL
  // ========================================
  const Scroll = {
    init() {
      // Scroll to top button
      elements.scrollToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      // Update on scroll
      window.addEventListener('scroll', () => {
        this.updateProgress();
        this.updateScrollToTop();
      }, { passive: true });
    },

    updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      elements.progressBar.style.width = `${progress}%`;
    },

    updateScrollToTop() {
      const visible = window.scrollY > 400;
      elements.scrollToTop.classList.toggle('visible', visible);
    }
  };

  // ========================================
  // ANIMATIONS
  // ========================================
  const Animations = {
    animateIn() {
      // Stagger animation for elements
      const animatable = elements.contentContainer.querySelectorAll(
        '.section-header, .content > h2, .content > h3, .content > p, .content > ul, .content > ol, .viz-card, .table-wrapper, .card, .grid > *'
      );

      animatable.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';

        setTimeout(() => {
          el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 50 + (i * 40));
      });
    }
  };

  // ========================================
  // KEYBOARD NAVIGATION
  // ========================================
  const Keyboard = {
    init() {
      document.addEventListener('keydown', (e) => {
        // Navigation with arrow keys
        if (e.altKey) {
          const currentIndex = CONFIG.sections.findIndex(s => s.id === state.currentSection);

          if (e.key === 'ArrowLeft' && currentIndex > 0) {
            e.preventDefault();
            Router.navigate(CONFIG.sections[currentIndex - 1].id);
          } else if (e.key === 'ArrowRight' && currentIndex < CONFIG.sections.length - 1) {
            e.preventDefault();
            Router.navigate(CONFIG.sections[currentIndex + 1].id);
          }
        }
      });
    }
  };

  // ========================================
  // INITIALIZE APP
  // ========================================
  function init() {
    Navigation.init();
    MobileMenu.init();
    Modal.init();
    Scroll.init();
    Keyboard.init();
    Router.init();
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
