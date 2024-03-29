import { IDescriptionState } from 'enteties/DescriptionCard';
import { DescriptionCard, DescriptionCardThemes } from 'enteties/DescriptionCard/ui/DescriptionCard';
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ChangeNowBlock.module.scss';
import { useNavigate } from 'react-router-dom';

interface ChangeNowBlockProps {
    className?: string;
}

export const ChangeNowBlock: React.FC<ChangeNowBlockProps> = (props) => {
    const { className } = props;

    const [ cards ] = useState<IDescriptionState[]>([
        {
            card: {
                icon: <p className={cls.icon}>🛋</p>,
                title: 'Запишитесь на первую сессию',
            },
            cardTheme: DescriptionCardThemes.FILL_WITHOUT_ICON,
            iconTheme: DescriptionCardThemes.FILL_WITHOUT_ICON,
        },
        {
            card: {
                icon: <p className={cls.icon}>🧠</p>,
                title: 'Проработайте ваши конфликты',
            },
            cardTheme: DescriptionCardThemes.FILL_WITHOUT_ICON,
            iconTheme: DescriptionCardThemes.FILL_WITHOUT_ICON,

        },
        {
            card: {
                icon: <p className={cls.icon}>⛅</p>,
                title: 'Начните замечать, как меняется ваше настоящее',
            },
            cardTheme: DescriptionCardThemes.FILL_WITHOUT_ICON,
            iconTheme: DescriptionCardThemes.FILL_WITHOUT_ICON,

        },
    ])

    const navigate = useNavigate()

    return (
        <div className={classNames(cls.changeNowBlock, {}, [className ?? '' ])}>
            <div className="container">
                <div className={cls.content}>
                    <h2 className={cls.title}>
                        Меняйте уже сейчас ✨
                    </h2>
                    <div className={cls.cards}>
                        {
                            cards.map(({card, cardTheme}, index)=>(
                                <DescriptionCard card={card} cardTheme={cardTheme} className={cls.card} key={`changeNowBlockCard_${index}`} />
                            ))
                        }
                    </div>
                    <Button theme={ButtonTheme.BLUE_BORDERED} onClick={()=>{navigate('#Q_A')}}>
                        Остались вопросы?
                        Мы перезвоним и ответим на них!
                    </Button>
                </div>
            </div>
        </div>
    );
}