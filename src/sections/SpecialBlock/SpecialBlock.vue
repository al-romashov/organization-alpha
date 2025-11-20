<script setup>
import { ref, computed, onMounted } from 'vue'
import MainContent from '@/components/SpecialBlock/MainContent'
import StructureContent from '@/components/SpecialBlock/StructureContent'
import EducationContent from '@/components/SpecialBlock/EducationContent'
import ManagementContent from '@/components/SpecialBlock/ManagementContent'
import DocumentsContent from '@/components/SpecialBlock/DocumentsContent'

const sections = [
  {
    id: 'main',
    name: 'Основные сведения',
    path: 'a.Main',
    hasSubsections: false
  },
  {
    id: 'structure',
    name: 'Структура',
    path: 'b.Structure',
    hasSubsections: false
  },
  {
    id: 'documents',
    name: 'Документы',
    path: 'c.Documents',
    hasSubsections: true,
    subsections: [
      { id: 'documents-a', name: 'Документы A', path: 'a' },
      { id: 'documents-b', name: 'Документы B', path: 'b' },
      { id: 'documents-c', name: 'Документы C', path: 'c' },
      { id: 'documents-d', name: 'Документы D', path: 'd' },
      { id: 'documents-e', name: 'Документы E', path: 'e' },
      { id: 'documents-f', name: 'Документы F', path: 'f' },
      { id: 'documents-g', name: 'Документы G', path: 'g' }
    ]
  },
  {
    id: 'education',
    name: 'Образование',
    path: 'd.Education',
    hasSubsections: false
  },
  {
    id: 'management',
    name: 'Руководство',
    path: 'e.Management',
    hasSubsections: false
  }
]

const activeSection = ref('main')
const activeSubsection = ref(null)
const images = ref([])
const isLoading = ref(false)
const expandedSections = ref(new Set())

// Предзагружаем все изображения
const imageModules = import.meta.glob('@/specialBlock/**/*.{jpg,jpeg,png,gif,webp}', {
  eager: false
})

const currentSection = computed(() => {
  return sections.find(s => s.id === activeSection.value)
})

const getSectionPath = (section, subsection = null) => {
  if (subsection) {
    return `specialBlock/${section.path}/${subsection.path}`
  }
  return `specialBlock/${section.path}`
}

const loadContent = async (section, subsection = null) => {
  isLoading.value = true
  images.value = []

  try {
    const basePath = getSectionPath(section, subsection)
    
    // Загружаем изображения для этого раздела
    const imageFiles = []
    const imageTargetPath = basePath.replace(/^specialBlock\//, '').replace(/\/$/, '')
    const imageKeys = Object.keys(imageModules).filter(key => {
      const normalizedKey = key
        .replace(/^.*?specialBlock\//, '')
        .replace(/\/[^/]+\.(jpg|jpeg|png|gif|webp)$/i, '')
        .replace(/^@\/specialBlock\//, '')
        .replace(/^src\/specialBlock\//, '')
      return normalizedKey === imageTargetPath && /\.(jpg|jpeg|png|gif|webp)$/i.test(key)
    })
    
    // Сортируем изображения по имени файла (числовое значение)
    imageKeys.sort((a, b) => {
      const fileNameA = a.split('/').pop() || ''
      const fileNameB = b.split('/').pop() || ''
      const numA = parseInt(fileNameA.match(/(\d+)/)?.[1] || '999999')
      const numB = parseInt(fileNameB.match(/(\d+)/)?.[1] || '999999')
      if (numA !== numB) {
        return numA - numB
      }
      return fileNameA.localeCompare(fileNameB)
    })
    
    for (const imageKey of imageKeys) {
      try {
        const imageModule = await imageModules[imageKey]()
        const imageSrc = typeof imageModule === 'string' ? imageModule : imageModule.default || imageModule
        const imageName = imageKey.split('/').pop()
        imageFiles.push({
          src: imageSrc,
          alt: `${section.name}${subsection ? ' - ' + subsection.name : ''} - ${imageName}`
        })
      } catch (e) {
        console.error('Error loading image:', e)
      }
    }
    
    images.value = imageFiles
  } catch (error) {
    console.error('Error loading content:', error)
  } finally {
    isLoading.value = false
  }
}

const toggleSection = (sectionId, event) => {
  const section = sections.find(s => s.id === sectionId)
  if (!section) return

  // Если у раздела есть подразделы, переключаем раскрытость
  if (section.hasSubsections) {
    event?.stopPropagation()
    if (expandedSections.value.has(sectionId)) {
      expandedSections.value.delete(sectionId)
    } else {
      expandedSections.value.add(sectionId)
    }
  } else {
    // Если подразделов нет, просто выбираем раздел
    selectSection(sectionId)
  }
}

const selectSection = (sectionId) => {
  activeSection.value = sectionId
  activeSubsection.value = null
  const section = sections.find(s => s.id === sectionId)
  if (section) {
    loadContent(section)
  }
}

const selectSubsection = (sectionId, subsectionId) => {
  activeSection.value = sectionId
  activeSubsection.value = subsectionId
  
  // Автоматически раскрываем родительский раздел
  if (!expandedSections.value.has(sectionId)) {
    expandedSections.value.add(sectionId)
  }
  
  const section = sections.find(s => s.id === sectionId)
  const subsection = section?.subsections?.find(s => s.id === subsectionId)
  if (section && subsection) {
    loadContent(section, subsection)
  }
}

const isSectionExpanded = (sectionId) => {
  return expandedSections.value.has(sectionId)
}

// Определяем какой компонент использовать
const currentComponent = computed(() => {
  if (activeSection.value === 'documents') {
    return DocumentsContent
  } else if (activeSection.value === 'main') {
    return MainContent
  } else if (activeSection.value === 'structure') {
    return StructureContent
  } else if (activeSection.value === 'education') {
    return EducationContent
  } else if (activeSection.value === 'management') {
    return ManagementContent
  }
  return null
})

onMounted(() => {
  // Загружаем первый раздел по умолчанию
  selectSection('main')
})
</script>

<template>
  <section class="special-block">
    <div class="special-block__container container">
      <div class="special-block__content">
        <div v-if="isLoading" class="special-block__loading">
          Загрузка...
        </div>
        <template v-else>
          <header class="special-block__header">
            <h1 class="special-block__title">
              {{ currentSection?.name }}
              <span v-if="activeSubsection" class="special-block__subtitle">
                - {{ currentSection?.subsections?.find(s => s.id === activeSubsection)?.name }}
              </span>
            </h1>
          </header>
          
          <div class="special-block__main">
            <component
              :is="currentComponent"
              v-if="currentComponent"
              :images="images"
            />
          </div>
        </template>
      </div>
      
      <aside class="special-block__aside">
        <nav class="special-block__nav">
          <ul class="special-block__nav-list">
            <li
              v-for="section in sections"
              :key="section.id"
              class="special-block__nav-item"
            >
              <button
                :class="[
                  'special-block__nav-link',
                  { 
                    'special-block__nav-link--active': activeSection === section.id && !activeSubsection,
                    'special-block__nav-link--expandable': section.hasSubsections,
                    'special-block__nav-link--expanded': isSectionExpanded(section.id)
                  }
                ]"
                @click="toggleSection(section.id, $event)"
              >
                <span class="special-block__nav-link-text">{{ section.name }}</span>
                <span 
                  v-if="section.hasSubsections" 
                  class="special-block__nav-link-arrow"
                >
                  ›
                </span>
              </button>
              
              <ul
                v-if="section.hasSubsections && section.subsections && isSectionExpanded(section.id)"
                class="special-block__nav-sublist"
              >
                <li
                  v-for="subsection in section.subsections"
                  :key="subsection.id"
                  class="special-block__nav-subitem"
                >
                  <button
                    :class="[
                      'special-block__nav-sublink',
                      { 'special-block__nav-sublink--active': activeSubsection === subsection.id }
                    ]"
                    @click="selectSubsection(section.id, subsection.id)"
                  >
                    {{ subsection.name }}
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  </section>
</template>

<style scoped lang="scss">
.special-block {
  padding: var(--section-padding-y) 0;

  &__container {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 40px;

    @include tablet {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }

  &__content {
    min-height: 400px;
  }

  &__loading {
    @include flex-center;
    min-height: 400px;
    font-size: 18px;
    color: var(--color-gray);
  }

  &__header {
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    @include mobile {
      margin-bottom: 30px;
      padding-bottom: 15px;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__title {
    @include fluid-text(32, 24);
    font-weight: 700;
    color: var(--color-white);
    margin: 0;
  }

  &__subtitle {
    font-weight: 400;
    color: var(--color-gray);
  }

  &__aside {
    @include tablet {
      order: -1;
    }
  }

  &__nav {
    position: sticky;
    top: 20px;
  }

  &__nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__nav-item {
    display: flex;
    flex-direction: column;
  }

  &__nav-link {
    width: 100%;
    padding: 12px 16px;
    text-align: left;
    background: transparent;
    border: none;
    border-left: 3px solid transparent;
    color: var(--color-white);
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-duration);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    @include hover {
      background-color: rgba(255, 255, 255, 0.05);
      color: var(--color-accent);
    }

    &--active {
      border-left-color: var(--color-accent);
      background-color: rgba(26, 74, 141, 0.1);
      color: var(--color-accent);
      font-weight: 600;
    }

    &--expandable {
      position: relative;
    }

    &--expanded {
      .special-block__nav-link-arrow {
        transform: rotate(90deg);
      }
    }
  }

  &__nav-link-text {
    flex: 1;
  }

  &__nav-link-arrow {
    display: inline-block;
    transition: transform var(--transition-duration);
    font-size: 18px;
    line-height: 1;
    color: inherit;
  }

  &__nav-sublist {
    list-style: none;
    margin: 5px 0 0 20px;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 3px;
    overflow: hidden;
    animation: slideDown 0.2s ease-out;
  }

  &__nav-subitem {
    display: flex;
  }

  &__nav-sublink {
    width: 100%;
    padding: 8px 16px;
    text-align: left;
    background: transparent;
    border: none;
    border-left: 3px solid transparent;
    color: var(--color-gray);
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    transition: all var(--transition-duration);
    border-radius: 4px;

    @include hover {
      background-color: rgba(255, 255, 255, 0.03);
      color: var(--color-white);
    }

    &--active {
      border-left-color: var(--color-accent);
      background-color: rgba(26, 74, 141, 0.1);
      color: var(--color-accent);
      font-weight: 500;
    }
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    max-height: 1000px;
    transform: translateY(0);
  }
}
</style>

