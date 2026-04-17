import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Доступно прямо сейчас</Badge>,
    title: "Ваш продукт. Ваша аудитория. Ваш момент.",
    showButton: true,
    buttonText: 'Начать бесплатно'
  },
  {
    id: 'about',
    title: 'Почему именно мы?',
    content: 'Мы делаем сложное простым. Без лишних шагов, без долгих ожиданий — только результат, который вы ощутите с первого дня.'
  },
  {
    id: 'features',
    title: 'Всё что нужно — внутри.',
    content: 'Мощный инструмент с простым интерфейсом. Работает там, где нужно, и так, как вы привыкли.'
  },
  {
    id: 'testimonials',
    title: 'Клиенты говорят лучше нас.',
    content: 'Сотни команд уже доверяют нам каждый день. Посмотрите, что изменилось в их работе.'
  },
  {
    id: 'join',
    title: 'Готовы попробовать?',
    content: 'Первый шаг занимает меньше минуты. Присоединяйтесь — и уже сегодня увидите разницу.',
    showButton: true,
    buttonText: 'Попробовать бесплатно'
  },
]