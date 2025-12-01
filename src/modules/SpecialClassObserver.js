import { ref } from 'vue'

let classObserver = null
let isInitialized = false
let sharedHasSpecialClass = null

/**
 * Отслеживает наличие класса "special" на HTML элементе
 * Использует singleton паттерн - один observer для всех компонентов
 * @returns {import('vue').Ref<boolean>} Реактивный ref с булевым значением
 */
export function useSpecialClass() {
  // Создаем общий реактивный ref при первом вызове
  if (!sharedHasSpecialClass) {
    sharedHasSpecialClass = ref(false)
  }

  const checkSpecialClass = () => {
    if (sharedHasSpecialClass) {
      sharedHasSpecialClass.value = document.documentElement.classList.contains('special')
    }
  }

  const initObserver = () => {
    if (isInitialized || typeof document === 'undefined') {
      return
    }

    // Проверяем начальное состояние
    checkSpecialClass()

    // Отслеживаем изменения класса "special" на html элементе
    classObserver = new MutationObserver(() => {
      checkSpecialClass()
    })

    classObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    isInitialized = true
  }

  // Инициализируем observer при первом вызове
  initObserver()

  return {
    hasSpecialClass: sharedHasSpecialClass
  }
}

