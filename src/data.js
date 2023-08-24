const data = [
  {
    id: '605112',
    title: 'Шар (5"/13 см) Синий, пастель',
    image: '605112.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 4,
    instock: true,
    discount: 0,
    category: 'Круглые',
    type: 'Латекс',
    color: 'blue',
    size: '5"/13 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description: 'Воздушный шар из 100% натурального латекса без искусственных добавок. Специально разработанная формула производства Sempertex® обеспечивает высочайшее качество продукции. Все шары изготавливаются из мягкого, легкого в обращении латекса, что позволяет продукции быть прочной, долговечной и иметь безупречное качество.'
  },
  {
    id: '281278',
    title: 'Шар (5"/13 см) Красный, пастель',
    image: '281278.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 4,
    instock: true,
    discount: 0,
    category: 'Круглые',
    type: 'Латекс',
    color: 'red',
    size: '5"/13 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Воздушный шар из 100% натурального латекса без искусственных добавок. Специально разработанная формула производства Sempertex® обеспечивает высочайшее качество продукции. Все шары изготавливаются из мягкого, легкого в обращении латекса, что позволяет продукции быть прочной, долговечной и иметь безупречное качество.'
  },
  {
    id: '200477',
    title: 'Шар (5"/13 см) Зеленый, пастель',
    image: '200477.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 4,
    instock: true,
    discount: 0,
    category: 'Круглые',
    type: 'Латекс',
    color: 'green',
    size: '5"/13 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Воздушный шар из 100% натурального латекса без искусственных добавок. Специально разработанная формула производства Sempertex® обеспечивает высочайшее качество продукции. Все шары изготавливаются из мягкого, легкого в обращении латекса, что позволяет продукции быть прочной, долговечной и иметь безупречное качество.'
  },
  {
    id: '200576',
    title: 'Шар (5"/13 см) Желтый, пастель',
    image: '200576.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 4,
    instock: true,
    discount: 0,
    category: 'Круглые',
    type: 'Латекс',
    color: 'yellow',
    size: '5"/13 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Воздушный шар из 100% натурального латекса без искусственных добавок. Специально разработанная формула производства Sempertex® обеспечивает высочайшее качество продукции. Все шары изготавливаются из мягкого, легкого в обращении латекса, что позволяет продукции быть прочной, долговечной и иметь безупречное качество.'
  },
  {
    id: '203973',
    title: 'Шар (5"/13 см) Фиолетовый, пастель',
    image: '203973.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 4,
    instock: true,
    discount: 0,
    category: 'Круглые',
    type: 'Латекс',
    color: 'purple',
    size: '5"/13 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Воздушный шар из 100% натурального латекса без искусственных добавок. Специально разработанная формула производства Sempertex® обеспечивает высочайшее качество продукции. Все шары изготавливаются из мягкого, легкого в обращении латекса, что позволяет продукции быть прочной, долговечной и иметь безупречное качество.'
  },
  {
    id: '281476',
    title: 'Шар (5"/13 см) Черный, пастель',
    image: '281476.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 4,
    instock: true,
    discount: 0,
    category: 'Круглые',
    type: 'Латекс',
    color: 'black',
    size: '5"/13 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Воздушный шар из 100% натурального латекса без искусственных добавок. Специально разработанная формула производства Sempertex® обеспечивает высочайшее качество продукции. Все шары изготавливаются из мягкого, легкого в обращении латекса, что позволяет продукции быть прочной, долговечной и иметь безупречное качество.'
  },
  {
    id: '280271',
    title: 'Шар (5"/13 см) Белый, пастель',
    image: '280271.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 4,
    instock: true,
    discount: 0,
    category: 'Круглые',
    type: 'Латекс',
    color: 'white',
    size: '5"/13 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Воздушный шар из 100% натурального латекса без искусственных добавок. Специально разработанная формула производства Sempertex® обеспечивает высочайшее качество продукции. Все шары изготавливаются из мягкого, легкого в обращении латекса, что позволяет продукции быть прочной, долговечной и иметь безупречное качество.'
  },
  {
    id: '626112',
    title: 'ШДМ (2"/5 см) Синий, пастель',
    image: '626112.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 2,
    instock: true,
    discount: 0,
    category: 'Моделирование',
    type: 'Латекс',
    color: 'blue',
    size: '2"/5 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Шар для моделирования из натурального латекса для создания фигур и композиций аэродизайна.'
  },
  {
    id: '626102',
    title: 'ШДМ (2"/5 см) Красный, пастель',
    image: '626102.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 2,
    instock: true,
    discount: 0,
    category: 'Моделирование',
    type: 'Латекс',
    color: 'red',
    size: '2"/5 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Шар для моделирования из натурального латекса для создания фигур и композиций аэродизайна.'
  },
  {
    id: '626105',
    title: 'ШДМ (2"/5 см) Зеленый, пастель',
    image: '626105.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 2,
    instock: true,
    discount: 0,
    category: 'Моделирование',
    type: 'Латекс',
    color: 'green',
    size: '2"/5 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Шар для моделирования из натурального латекса для создания фигур и композиций аэродизайна.'
  },
  {
    id: '626106',
    title: 'ШДМ (2"/5 см) Желтый, пастель',
    image: '626106.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 2,
    instock: true,
    discount: 0,
    category: 'Моделирование',
    type: 'Латекс',
    color: 'yellow',
    size: '2"/5 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Шар для моделирования из натурального латекса для создания фигур и композиций аэродизайна.'
  },
  {
    id: '626109',
    title: 'ШДМ (2"/5 см) Фиолетовый, пастель',
    image: '626109.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 2,
    instock: true,
    discount: 0,
    category: 'Моделирование',
    type: 'Латекс',
    color: 'purple',
    size: '2"/5 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Шар для моделирования из натурального латекса для создания фигур и композиций аэродизайна.'
  },
  {
    id: '626118',
    title: 'ШДМ (2"/5 см) Черный, пастель',
    image: '626118.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 2,
    instock: true,
    discount: 0,
    category: 'Моделирование',
    type: 'Латекс',
    color: 'black',
    size: '2"/5 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Шар для моделирования из натурального латекса для создания фигур и композиций аэродизайна.'
  },
  {
    id: '626101',
    title: 'ШДМ (2"/5 см) Белый, пастель',
    image: '626101.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 2,
    instock: true,
    discount: 0,
    category: 'Моделирование',
    type: 'Латекс',
    color: 'white',
    size: '2"/5 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Шар для моделирования из натурального латекса для создания фигур и композиций аэродизайна.'
  },
  {
    id: '801452',
    title: 'ШДМ (2"/5 см) Серый, пастель',
    image: '801452.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 6,
    instock: true,
    discount: 0,
    category: 'Моделирование',
    type: 'Латекс',
    color: 'grey',
    size: '2"/5 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Воздушный шар из 100% натурального латекса без искусственных добавок. Специально разработанная формула производства Sempertex® обеспечивает высочайшее качество продукции. Все шары изготавливаются из мягкого, легкого в обращении латекса, что позволяет продукции быть прочной, долговечной и иметь безупречное качество.'
  },
  {
    id: '801278',
    title: 'ШДМ (2"/5 см) Красный, пастель',
    image: '801278.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 6,
    instock: true,
    discount: 0,
    category: 'Моделирование',
    type: 'Латекс',
    color: 'red',
    size: '2"/5 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Воздушный шар из 100% натурального латекса без искусственных добавок. Специально разработанная формула производства Sempertex® обеспечивает высочайшее качество продукции. Все шары изготавливаются из мягкого, легкого в обращении латекса, что позволяет продукции быть прочной, долговечной и иметь безупречное качество.'
  },
  {
    id: '802473',
    title: 'ШДМ (2"/5 см) Зеленый, пастель',
    image: '802473.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 6,
    instock: true,
    discount: 0,
    category: 'Моделирование',
    type: 'Латекс',
    color: 'green',
    size: '2"/5 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Воздушный шар из 100% натурального латекса без искусственных добавок. Специально разработанная формула производства Sempertex® обеспечивает высочайшее качество продукции. Все шары изготавливаются из мягкого, легкого в обращении латекса, что позволяет продукции быть прочной, долговечной и иметь безупречное качество.'
  },
  {
    id: '800578',
    title: 'ШДМ (2"/5 см) Желтый, пастель',
    image: '800578.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 6,
    instock: true,
    discount: 0,
    category: 'Моделирование',
    type: 'Латекс',
    color: 'yellow',
    size: '2"/5 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Воздушный шар из 100% натурального латекса без искусственных добавок. Специально разработанная формула производства Sempertex® обеспечивает высочайшее качество продукции. Все шары изготавливаются из мягкого, легкого в обращении латекса, что позволяет продукции быть прочной, долговечной и иметь безупречное качество.'
  },
  {
    id: '800776',
    title: 'ШДМ (2"/5 см) Фиолетовый, пастель',
    image: '800776.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 6,
    instock: true,
    discount: 0,
    category: 'Моделирование',
    type: 'Латекс',
    color: 'purple',
    size: '2"/5 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Воздушный шар из 100% натурального латекса без искусственных добавок. Специально разработанная формула производства Sempertex® обеспечивает высочайшее качество продукции. Все шары изготавливаются из мягкого, легкого в обращении латекса, что позволяет продукции быть прочной, долговечной и иметь безупречное качество.'
  },
  {
    id: '800271',
    title: 'ШДМ (2"/5 см) Белый, пастель',
    image: '800271.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 6,
    instock: true,
    discount: 0,
    category: 'Моделирование',
    type: 'Латекс',
    color: 'white',
    size: '2"/5 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Воздушный шар из 100% натурального латекса без искусственных добавок. Специально разработанная формула производства Sempertex® обеспечивает высочайшее качество продукции. Все шары изготавливаются из мягкого, легкого в обращении латекса, что позволяет продукции быть прочной, долговечной и иметь безупречное качество.'
  },
  {
    id: '531557',
    title: 'Линколун (12"/30 см) Синий, пастель',
    image: '531557.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 12,
    instock: true,
    discount: 0,
    category: 'Линколун',
    type: 'Латекс',
    color: 'blue',
    size: '12"/30 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Воздушный шар из 100% натурального латекса без искусственных добавок. Специально разработанная формула производства Sempertex® обеспечивает высочайшее качество продукции. Все шары изготавливаются из мягкого, легкого в обращении латекса, что позволяет продукции быть прочной, долговечной и иметь безупречное качество.'
  },
  {
    id: '531250',
    title: 'Линколун (12"/30 см) Красный, пастель',
    image: '531250.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 12,
    instock: true,
    discount: 0,
    category: 'Линколун',
    type: 'Латекс',
    color: 'red',
    size: '12"/30 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Воздушный шар из 100% натурального латекса без искусственных добавок. Специально разработанная формула производства Sempertex® обеспечивает высочайшее качество продукции. Все шары изготавливаются из мягкого, легкого в обращении латекса, что позволяет продукции быть прочной, долговечной и иметь безупречное качество.'
  },
  {
    id: '531861',
    title: 'Линколун (12"/30 см) Зеленый, пастель',
    image: '531861.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 12,
    instock: true,
    discount: 0,
    category: 'Линколун',
    type: 'Латекс',
    color: 'green',
    size: '12"/30 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Воздушный шар из 100% натурального латекса без искусственных добавок. Специально разработанная формула производства Sempertex® обеспечивает высочайшее качество продукции. Все шары изготавливаются из мягкого, легкого в обращении латекса, что позволяет продукции быть прочной, долговечной и иметь безупречное качество.'
  },
  {
    id: '530567',
    title: 'Линколун (12"/30 см) Желтый, пастель',
    image: '530567.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 12,
    instock: true,
    discount: 0,
    category: 'Линколун',
    type: 'Латекс',
    color: 'yellow',
    size: '12"/30 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Воздушный шар из 100% натурального латекса без искусственных добавок. Специально разработанная формула производства Sempertex® обеспечивает высочайшее качество продукции. Все шары изготавливаются из мягкого, легкого в обращении латекса, что позволяет продукции быть прочной, долговечной и иметь безупречное качество.'
  },
  {
    id: '531465',
    title: 'Линколун (12"/30 см) Черный, пастель',
    image: '531465.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 12,
    instock: true,
    discount: 0,
    category: 'Линколун',
    type: 'Латекс',
    color: 'black',
    size: '12"/30 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Воздушный шар из 100% натурального латекса без искусственных добавок. Специально разработанная формула производства Sempertex® обеспечивает высочайшее качество продукции. Все шары изготавливаются из мягкого, легкого в обращении латекса, что позволяет продукции быть прочной, долговечной и иметь безупречное качество.'
  },
  {
    id: '530260',
    title: 'Линколун (12"/30 см) Белый, пастель',
    image: '530260.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 12,
    instock: true,
    discount: 0,
    category: 'Линколун',
    type: 'Латекс',
    color: 'white',
    size: '12"/30 см',
    producer: 'Sempertex S.A.',
    country: 'КОЛУМБИЯ',
    description:
      'Воздушный шар из 100% натурального латекса без искусственных добавок. Специально разработанная формула производства Sempertex® обеспечивает высочайшее качество продукции. Все шары изготавливаются из мягкого, легкого в обращении латекса, что позволяет продукции быть прочной, долговечной и иметь безупречное качество.'
  },
  {
    id: '302500A',
    title: 'Воздушный шар без рисунка (9"/23 см) Мини-звезда, Синий',
    image: '302500A.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 15,
    instock: true,
    discount: 0,
    category: 'Звезда',
    type: 'Фольга',
    color: 'blue',
    size: '9"/23 см',
    producer: 'Flexmetal',
    country: 'ИСПАНИЯ',
    description:
      '9 дюймовый фольгированный воздушный шар в форме звезды. Надувается только воздухом. Крепится с помощью палочки и насадки. Клапан отсутствует, поэтому для запаивания рекомендуется использовать запайщик. Чаще всего используется в оформлениии, композициях.'
  },
  {
    id: '302500R',
    title: 'Воздушный шар без рисунка (9"/23 см) Мини-звезда, Красный',
    image: '302500R.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 15,
    instock: true,
    discount: 0,
    category: 'Звезда',
    type: 'Фольга',
    color: 'red',
    size: '9"/23 см',
    producer: 'Flexmetal',
    country: 'ИСПАНИЯ',
    description:
      '9 дюймовый фольгированный воздушный шар в форме звезды. Надувается только воздухом. Крепится с помощью палочки и насадки. Клапан отсутствует, поэтому для запаивания рекомендуется использовать запайщик. Чаще всего используется в оформлениии, композициях.'
  },
  {
    id: '302500VE',
    title: 'Воздушный шар без рисунка (9"/23 см) Мини-звезда, Зеленый',
    image: '302500VE.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 15,
    instock: true,
    discount: 0,
    category: 'Звезда',
    type: 'Фольга',
    color: 'green',
    size: '9"/23 см',
    producer: 'Flexmetal',
    country: 'ИСПАНИЯ',
    description:
      '9 дюймовый фольгированный воздушный шар в форме звезды. Надувается только воздухом. Крепится с помощью палочки и насадки. Клапан отсутствует, поэтому для запаивания рекомендуется использовать запайщик. Чаще всего используется в оформлениии, композициях.'
  },
  {
    id: '302500O',
    title: 'Воздушный шар без рисунка (9"/23 см) Мини-звезда, Желтый',
    image: '302500O.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 15,
    instock: true,
    discount: 0,
    category: 'Звезда',
    type: 'Фольга',
    color: 'yellow',
    size: '9"/23 см',
    producer: 'Flexmetal',
    country: 'ИСПАНИЯ',
    description:
      '9 дюймовый фольгированный воздушный шар в форме звезды. Надувается только воздухом. Крепится с помощью палочки и насадки. Клапан отсутствует, поэтому для запаивания рекомендуется использовать запайщик. Чаще всего используется в оформлениии, композициях.'
  },
  {
    id: '302500V',
    title: 'Воздушный шар без рисунка (9"/23 см) Мини-звезда, Фиолетовый',
    image: '302500V.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 15,
    instock: true,
    discount: 0,
    category: 'Звезда',
    type: 'Фольга',
    color: 'purple',
    size: '9"/23 см',
    producer: 'Flexmetal',
    country: 'ИСПАНИЯ',
    description:
      '9 дюймовый фольгированный воздушный шар в форме звезды. Надувается только воздухом. Крепится с помощью палочки и насадки. Клапан отсутствует, поэтому для запаивания рекомендуется использовать запайщик. Чаще всего используется в оформлениии, композициях.'
  },
  {
    id: '302500P',
    title: 'Воздушный шар без рисунка (9"/23 см) Мини-звезда, Серебро',
    image: '302500P.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 15,
    instock: true,
    discount: 0,
    category: 'Звезда',
    type: 'Фольга',
    color: 'grey',
    size: '9"/23 см',
    producer: 'Flexmetal',
    country: 'ИСПАНИЯ',
    description:
      '9 дюймовый фольгированный воздушный шар в форме звезды. Надувается только воздухом. Крепится с помощью палочки и насадки. Клапан отсутствует, поэтому для запаивания рекомендуется использовать запайщик. Чаще всего используется в оформлениии, композициях.'
  },
  {
    id: '301500B',
    title: 'Воздушный шар без рисунка (9"/23 см) Мини-звезда, Белый',
    image: '301500B.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 15,
    instock: true,
    discount: 0,
    category: 'Звезда',
    type: 'Фольга',
    color: 'white',
    size: '9"/23 см',
    producer: 'Flexmetal',
    country: 'ИСПАНИЯ',
    description:
      '9 дюймовый фольгированный воздушный шар в форме звезды. Надувается только воздухом. Крепится с помощью палочки и насадки. Клапан отсутствует, поэтому для запаивания рекомендуется использовать запайщик. Чаще всего используется в оформлениии, композициях.'
  },
  {
    id: 'G72072',
    title: 'Шар (14"/36 см) Мини-фигура, Голова, Жираф',
    image: 'G72072.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 45,
    instock: true,
    discount: 0,
    category: 'Фигурные',
    type: 'Фольга',
    color: 'yellow',
    size: '14"/36 см',
    producer: 'Grabo S.r.l.',
    country: 'ИТАЛИЯ',
    description:
      'Фольгированный воздушный шар в виде фигуры. Надувается только воздухом. Клапан отсутствует, поэтому для запаивания рекомендуется использовать запайщик.'
  },
  {
    id: 'G72055',
    title: 'Шар (14"/36 см) Мини-фигура, Голова, Заяц',
    image: 'G72055.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 45,
    instock: true,
    discount: 0,
    category: 'Фигурные',
    type: 'Фольга',
    color: 'grey',
    size: '14"/36 см',
    producer: 'Grabo S.r.l.',
    country: 'ИТАЛИЯ',
    description:
      'Фольгированный воздушный шар в виде фигуры. Надувается только воздухом. Клапан отсутствует, поэтому для запаивания рекомендуется использовать запайщик.'
  },
  {
    id: 'G72059',
    title: 'Шар (14"/36 см) Мини-фигура, Голова, Лев',
    image: 'G72059.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 45,
    instock: true,
    discount: 0,
    category: 'Фигурные',
    type: 'Фольга',
    color: 'yellow',
    size: '14"/36 см',
    producer: 'Grabo S.r.l.',
    country: 'ИТАЛИЯ',
    description:
      'Фольгированный воздушный шар в виде фигуры. Надувается только воздухом. Клапан отсутствует, поэтому для запаивания рекомендуется использовать запайщик.'
  },
  {
    id: 'G72061',
    title: 'Шар (14"/36 см) Мини-фигура, Голова, Панда',
    image: 'G72061.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 45,
    instock: true,
    discount: 0,
    category: 'Фигурные',
    type: 'Фольга',
    color: 'white',
    size: '14"/36 см',
    producer: 'Grabo S.r.l.',
    country: 'ИТАЛИЯ',
    description:
      'Фольгированный воздушный шар в виде фигуры. Надувается только воздухом. Клапан отсутствует, поэтому для запаивания рекомендуется использовать запайщик.'
  },
  {
    id: 'G19667',
    title: 'Шар (14"/36 см) Мини-фигура, Божья коровка',
    image: 'G19667.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 45,
    instock: true,
    discount: 0,
    category: 'Фигурные',
    type: 'Фольга',
    color: 'red',
    size: '14"/36 см',
    producer: 'Grabo S.r.l.',
    country: 'ИТАЛИЯ',
    description:
      'Фольгированный воздушный шар в виде фигуры. Надувается только воздухом. Клапан отсутствует, поэтому для запаивания рекомендуется использовать запайщик.'
  },
  {
    id: 'G72052',
    title: 'Шар (14"/36 см) Мини-фигура, Полицейская машина',
    image: 'G72052.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 45,
    instock: true,
    discount: 0,
    category: 'Фигурные',
    type: 'Фольга',
    color: 'black',
    size: '14"/36 см',
    producer: 'Grabo S.r.l.',
    country: 'ИТАЛИЯ',
    description:
      'Фольгированный воздушный шар в виде фигуры. Надувается только воздухом. Клапан отсутствует, поэтому для запаивания рекомендуется использовать запайщик.'
  },
  {
    id: 'G72129',
    title: 'Шар (27"/69 см) Фигура, Трактор, Зеленый',
    image: 'G72129.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 95,
    instock: true,
    discount: 0,
    category: 'Фигурные',
    type: 'Фольга',
    color: 'green',
    size: '27"/69 см',
    producer: 'Grabo S.r.l.',
    country: 'ИТАЛИЯ',
    description:
      'Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий. Фольгированные воздушные шары изготавливаются из тонкой миларовой пленки, позволяющей шару не сдуваться в течение нескольких дней. Фольгированные воздушные шары надувают через клапан. Поэтому плотно надутый шар завязывать не требуется - обратный клапан хорошо удерживает гелий внутри шара. К шару привязывают ленту только для того, чтобы шар не улетел. Сдувшийся фольгированный шар можно поддуть гелием или воздухом и он всегда будет иметь товарный вид.'
  },
  {
    id: '901630A',
    title: 'Большой воздушный шар (35"/89 см) Морская касатка, Синий',
    image: '901630A.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 125,
    instock: true,
    discount: 0,
    category: 'Фигурные',
    type: 'Фольга',
    color: 'blue',
    size: '35"/89 см',
    producer: 'Flexmetal',
    country: 'ИСПАНИЯ',
    description:
      'Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий. Фольгированные воздушные шары изготавливаются из тонкой миларовой пленки, позволяющей шару не сдуваться в течение нескольких дней. Фольгированные воздушные шары надувают через клапан. Поэтому плотно надутый шар завязывать не требуется - обратный клапан хорошо удерживает гелий внутри шара. К шару привязывают ленту только для того, чтобы шар не улетел. Сдувшийся фольгированный шар можно поддуть гелием или воздухом и он всегда будет иметь товарный вид.'
  },
  {
    id: '901630N',
    title: 'Большой воздушный шар (35"/89 см) Морская касатка, Черный',
    image: '901630N.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 125,
    instock: true,
    discount: 0,
    category: 'Фигурные',
    type: 'Фольга',
    color: 'black',
    size: '35"/89 см',
    producer: 'Flexmetal',
    country: 'ИСПАНИЯ',
    description:
      'Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий. Фольгированные воздушные шары изготавливаются из тонкой миларовой пленки, позволяющей шару не сдуваться в течение нескольких дней. Фольгированные воздушные шары надувают через клапан. Поэтому плотно надутый шар завязывать не требуется - обратный клапан хорошо удерживает гелий внутри шара. К шару привязывают ленту только для того, чтобы шар не улетел. Сдувшийся фольгированный шар можно поддуть гелием или воздухом и он всегда будет иметь товарный вид.'
  },
  {
    id: '902537L',
    title: 'Маленький воздушный шар (16"/41 см), Заяц, Фиолетовый',
    image: '902537L.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 65,
    instock: true,
    discount: 0,
    category: 'Фигурные',
    type: 'Фольга',
    color: 'purple',
    size: '16"/41 см',
    producer: 'Flexmetal',
    country: 'ИСПАНИЯ',
    description:
      'Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий. Фольгированные воздушные шары изготавливаются из тонкой миларовой пленки, позволяющей шару не сдуваться в течение нескольких дней. Фольгированные воздушные шары надувают через клапан. Поэтому плотно надутый шар завязывать не требуется - обратный клапан хорошо удерживает гелий внутри шара. К шару привязывают ленту только для того, чтобы шар не улетел. Сдувшийся фольгированный шар можно поддуть гелием или воздухом и он всегда будет иметь товарный вид.'
  },
  {
    id: '902537',
    title: 'Маленький воздушный шар (16"/41 см), Заяц, Серебро',
    image: '902537.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 65,
    instock: true,
    discount: 0,
    category: 'Фигурные',
    type: 'Фольга',
    color: 'grey',
    size: '16"/41 см',
    producer: 'Flexmetal',
    country: 'ИСПАНИЯ',
    description:
      'Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий. Фольгированные воздушные шары изготавливаются из тонкой миларовой пленки, позволяющей шару не сдуваться в течение нескольких дней. Фольгированные воздушные шары надувают через клапан. Поэтому плотно надутый шар завязывать не требуется - обратный клапан хорошо удерживает гелий внутри шара. К шару привязывают ленту только для того, чтобы шар не улетел. Сдувшийся фольгированный шар можно поддуть гелием или воздухом и он всегда будет иметь товарный вид.'
  },
  {
    id: '902537VE',
    title: 'Маленький воздушный шар (16"/41 см), Заяц, Зеленый',
    image: '902537VE.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 65,
    instock: true,
    discount: 0,
    category: 'Фигурные',
    type: 'Фольга',
    color: 'green',
    size: '16"/41 см',
    producer: 'Flexmetal',
    country: 'ИСПАНИЯ',
    description:
      'Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий. Фольгированные воздушные шары изготавливаются из тонкой миларовой пленки, позволяющей шару не сдуваться в течение нескольких дней. Фольгированные воздушные шары надувают через клапан. Поэтому плотно надутый шар завязывать не требуется - обратный клапан хорошо удерживает гелий внутри шара. К шару привязывают ленту только для того, чтобы шар не улетел. Сдувшийся фольгированный шар можно поддуть гелием или воздухом и он всегда будет иметь товарный вид.'
  },
  {
    id: '901669A',
    title: 'Шар (41"/104 см) Фигура, Пиратский корабль, Синий',
    image: '901669A.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 149,
    instock: true,
    discount: 0,
    category: 'Фигурные',
    type: 'Фольга',
    color: 'blue',
    size: '41"/104 см',
    producer: 'Flexmetal',
    country: 'ИСПАНИЯ',
    description:
      'Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий. Фольгированные воздушные шары изготавливаются из тонкой миларовой пленки, позволяющей шару не сдуваться в течение нескольких дней. Фольгированные воздушные шары надувают через клапан. Поэтому плотно надутый шар завязывать не требуется - обратный клапан хорошо удерживает гелий внутри шара. К шару привязывают ленту только для того, чтобы шар не улетел. Сдувшийся фольгированный шар можно поддуть гелием или воздухом и он всегда будет иметь товарный вид.'
  },
  {
    id: '901669',
    title: 'Шар (41"/104 см) Фигура, Пиратский корабль, Черный',
    image: '901669.jpg',
    count: 1,
    min: 1,
    max: 1000,
    price: 149,
    instock: true,
    discount: 0,
    category: 'Фигурные',
    type: 'Фольга',
    color: 'black',
    size: '41"/104 см',
    producer: 'Flexmetal',
    country: 'ИСПАНИЯ',
    description:
      'Фольгированный шар в виде фигуры для украшения праздника, приспособлен под гелий. Фольгированные воздушные шары изготавливаются из тонкой миларовой пленки, позволяющей шару не сдуваться в течение нескольких дней. Фольгированные воздушные шары надувают через клапан. Поэтому плотно надутый шар завязывать не требуется - обратный клапан хорошо удерживает гелий внутри шара. К шару привязывают ленту только для того, чтобы шар не улетел. Сдувшийся фольгированный шар можно поддуть гелием или воздухом и он всегда будет иметь товарный вид.'
  }
]

export default data
