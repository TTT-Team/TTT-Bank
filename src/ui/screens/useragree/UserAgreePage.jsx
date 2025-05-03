import React from 'react';

export default function UserAgreement() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
            <div className="max-w-3xl w-full bg-gray-900 text-white rounded-2xl shadow-2xl p-8 space-y-6">
                <h1 className="text-3xl font-bold text-yellow-400 text-center">
                    Пользовательское соглашение «Банк на Рофле"
                </h1>
                <p className="italic text-gray-400 text-center">
                    «Мы такие серьёзные, что даже не серьёзны»
                </p>

                <section className="space-y-2">
                    <h2 className="text-xl font-semibold text-yellow-300 border-l-4 border-yellow-500 pl-4">
                        1. Общие положения
                    </h2>
                    <ul className="list-inside list-disc text-gray-300 space-y-1">
                        <li>«Банк на Рофле» оставляет за собой право менять это соглашение чаще, чем мемы выходят из моды.</li>
                        <li>Пользователь гарантирует, что умеет отличать шутку от реальности (а если нет — мы не виноваты).</li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className="text-xl font-semibold text-yellow-300 border-l-4 border-yellow-500 pl-4">
                        2. Термины и определения
                    </h2>
                    <ul className="list-inside list-disc text-gray-300 space-y-1">
                        <li><strong>Лайк</strong> — одобрительный кивок в интернете и в жизни.</li>
                        <li><strong>Троль</strong> — тот, кто пишет гневные комменты, но всё равно читает наши правила.</li>
                        <li><strong>Кэш</strong> — не только деньги, но и чувство лёгкой радости, когда показывает баланс.</li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className="text-xl font-semibold text-yellow-300 border-l-4 border-yellow-500 pl-4">
                        3. Права и обязанности Банка
                    </h2>
                    <div className="text-gray-300 space-y-2">
                        <p><strong>3.1. Обязуется:</strong></p>
                        <ul className="list-inside list-disc space-y-1">
                            <li>Смешить Тебя остроумными уведомлениями о списании 0.0001 ₽ за кофе — но кофе мы не пьем;</li>
                            <li>Начислять бонусы в виде мемов в личном кабинете;</li>
                            <li>Не воровать котиков (только щенков, но тоже не воровать).</li>
                        </ul>
                        <p><strong>3.2. Вправе:</strong></p>
                        <ul className="list-inside list-disc space-y-1">
                            <li>Отменять Твою подписку на серьёзность без предупреждения;</li>
                            <li>Закрывать счета, если клиент перестал шутить по графику (минимум 1 мем в день);</li>
                            <li>Требовать от Тебя прислать лучший гиф с котиком раз в неделю.</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-2">
                    <h2 className="text-xl font-semibold text-yellow-300 border-l-4 border-yellow-500 pl-4">
                        4. Права и обязанности Пользователя
                    </h2>
                    <div className="text-gray-300 space-y-2">
                        <p><strong>4.1. Обязаности:</strong></p>
                        <ul className="list-inside list-disc space-y-1">
                            <li>Проверять баланс чаще, чем погоду;</li>
                            <li>Не использовать банковские реквизиты для выкупа острова в Карибском море… ну или тихо-мирно договориться с нами;</li>
                            <li>Лайкать уведомления о комиссиях, чтобы поддержать нашу команду юмористов.</li>
                        </ul>
                        <p><strong>4.2. Имеет право:</strong></p>
                        <ul className="list-inside list-disc space-y-1">
                            <li>Требовать компенсацию в виде дежурного анекдота при любой ошибке системы;</li>
                            <li>Отправлять жалобы исключительно в формате смешных селфи;</li>
                            <li>Получить статус «VIP-рофлёра», если собрал коллекцию всех наших сообщений «Ой, техничиский перерыв».</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-2">
                    <h2 className="text-xl font-semibold text-yellow-300 border-l-4 border-yellow-500 pl-4">
                        5. Ответственность сторон
                    </h2>
                    <ul className="list-inside list-disc text-gray-300 space-y-1">
                        <li>Банк не несёт ответственности, если Ты случайно отправил родителям скриншот своего «рокет-чат-бота» вместо отчёта по бухгалтерии.</li>
                        <li>Пользователь не несет ответственности за неудачные шутки, но обязан подбодрить менеджера, если у него не получилось рассказать анекдот.</li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className="text-xl font-semibold text-yellow-300 border-l-4 border-yellow-500 pl-4">
                        6. Форс-мажор
                    </h2>
                    <ul className="list-inside list-disc text-gray-300 space-y-1">
                        <li>Стороны освобождаются от обязательств, если вдруг закончился интернет, электричество, кофе или мемы.</li>
                        <li>При форс-мажоре «Банк на Рофле» выпустит специальный гиф с ленивцем, чтобы сгладить ситуацию.</li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className="text-xl font-semibold text-yellow-300 border-l-4 border-yellow-500 pl-4">
                        7. Срок действия
                    </h2>
                    <ul className="list-inside list-disc text-gray-300 space-y-1">
                        <li>Соглашение действует до тех пор, пока существует чувство юмора.</li>
                        <li>Если чувство юмора исчезнет — оно автоматически продлевается ещё на год (мы так положили).</li>
                    </ul>
                </section>

                <section className="space-y-2 text-center">
                    <h2 className="text-xl font-semibold text-yellow-300 border-l-4 border-yellow-500 pl-4">
                        8. Заключительные положения
                    </h2>
                    <p className="text-gray-300">
                        Продолжая пользоваться «Банком на Рофле», Ты подтверждаешь, что прочитал это соглашение, усмехнулся хотя бы раз и поставил лайк.
                    </p>
                    <p className="text-gray-300">
                        Все споры решаются за чашкой виртуального латте и за просмотром котиков на YouTube.
                    </p>
                </section>
            </div>
        </div>
    );
}
