<script setup>
const props = defineProps({
  images: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="special-block-content">
    <div class="special-block-content__text">
      <p>Учебный центр ДПО ООО "Альфа" — это современная обучающая организация, оказывающая качественные образовательные услуги, согласно действующего законодательства РФ, в области обучения охраны труда, пожарной безопасности, электробезопасности, экологии, переподготовки по рабочим специальностям и др.</p>
      <p>Учебный центр ДПО ООО "Альфа" осуществляет образовательную деятельность на основание Лицензии №11594 от 28.09.2020 года.</p>
      <table class="special-block-content__table">
        <tr>
          <th>Формы обучения</th>
          <td>очная, очно-заочная, дистанционная, заочная</td>
        </tr>
        <tr>
          <th>Сроки освоения учебных программ</th>
          <td>от 8 до 256 часов</td>
        </tr>
        <tr>
          <th>Обучение проводится</th>
          <td>на русском языке</td>
        </tr>
        <tr>
          <th>Практика</th>
          <td>проводится на предприятиях Заказчика</td>
        </tr>
        <tr>
          <th>Уровень образования, необходимый для освоения программ</th>
          <td>
            <ul>
              <li>для программ повышения квалификации и профессиональной переподготовки – не ниже средне-специального (технического, профессионального)</li>
              <li>для допусков на право выполнения видов работ – не ниже общего образования</li>
            </ul>
          </td>
        </tr>
      </table>
      <p>Учебный центр ДПО ООО "Альфа":</p>
      <ul>
        <li>в своем штате имеет квалифицированных опытных преподавателей с реальным опытом работы в области охраны труда, пожарной безопасности, электробезопасности и экологии;</li>
        <li>имеет всю необходимую материально-техническую базу в виде учебных помещений, а также оборудование, технические средства обучения для осуществления процесса обучения по охране труда, в том числе медицинские манекены для отработки навыков первой помощи пострадавшим, тренажеры и средства индивидуальной защиты для отработки навыком применения и использования СИЗ;</li>
        <li>проводит групповое обучение в Учебном центре, а также организует индивидуальные выезды преподавателей на территорию Заказчика;</li>
        <li>имеет полигон и тренажеры для отработки навыков обучения безопасным методам и приемам выполнения работ на высоте и в ограниченно-замкнутых пространствах;</li>
        <li>обеспечивает своевременную передачу сведений о лицах, прошедших обучение, в систему Федерального реестра сведений о документах об образовании и (или) о квалификации, документах об обучении;</li>
        <li>обеспечивает своевременную передачу сведений о лицах, обученных требованиям охраны труда (в том числе обучение по оказанию первой помощи пострадавшим и обучение по использованию (применению) средств индивидуальной защиты) в Реестр «обученных по охране труда лиц» в системе единой общероссийской справочно-информационной системе по охране труда.</li>
      </ul>
      <p>По результатам обучения и проверки знаний Ваши сотрудники получат документы установленного образца.</p>
    </div>
    
    <div v-if="images.length > 0" class="special-block-content__images-wrapper">
      <h2 class="special-block-content__images-title">
        Изображения
      </h2>
      <div class="special-block-content__images">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          class="special-block-content__image"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.special-block-content {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__text {
    @include fluid-text(16, 14);
    line-height: 1.6;
    color: var(--color-white);

    :deep(p) {
      margin: 0 0 15px 0;

      &:last-child {
        margin-bottom: 0;
      }
    }

    :deep(ul) {
      margin: 15px 0;
      padding-left: 20px;
      list-style-type: disc;
    }

    :deep(li) {
      margin-bottom: 8px;
    }

    :deep(h3) {
      @include fluid-text(24, 20);
      font-weight: 600;
      margin: 25px 0 12px 0;
      color: var(--color-white);
    }

    :deep(strong) {
      font-weight: 700;
    }

    :deep(table) {
      width: 100%;
      border-collapse: collapse;
      margin: 25px 0;
    }

    :deep(th),
    :deep(td) {
      padding: 12px 16px;
      text-align: left;
      border: 1px solid rgba(255, 255, 255, 0.1);
      vertical-align: top;
    }

    :deep(th) {
      font-weight: 600;
      background-color: rgba(255, 255, 255, 0.05);
      color: var(--color-white);
      min-width: 250px;

      @include mobile {
        min-width: 150px;
      }
    }

    :deep(td) {
      color: var(--color-white);
    }

    :deep(table ul) {
      margin: 0;
      padding-left: 20px;
      list-style-type: disc;
    }

    :deep(table li) {
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__images-wrapper {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @include mobile {
      margin-top: 30px;
      gap: 15px;
    }
  }

  &__images-title {
    @include fluid-text(24, 20);
    font-weight: 600;
    color: var(--color-white);
    margin: 0;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  &__images {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  &__image {
    max-width: 720px;
    width: 100%;
    height: auto;
    border-radius: var(--border-radius);
    object-fit: cover;
  }
}
</style>
