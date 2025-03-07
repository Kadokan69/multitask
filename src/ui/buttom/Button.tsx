
export const enum typeButton {
    BUTTOM = 'buttom',
    LINK = 'link'
}

type Props = {
    type: typeButton
    link?: string;
    onClikc?: () => void
    children: string
}

export const Button = (props: Props) => {
    
    if(props.type === typeButton.LINK) {
        return <a href={props.link}>{props.children}</a>
    }else {
        return <button onClick={props.onClikc}>{props.children}</button>;
    }
}
