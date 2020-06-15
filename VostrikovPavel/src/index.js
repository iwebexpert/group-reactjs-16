import React from "react";
import ReactDom from "react-dom";

const element = <h1 className="element">Первая страница </h1>;

const Button = (props) => {
    const handleClick = (event) => {
        //console.log(event);
        console.log('Btn click!');
        messagesData.push("Добавлена еще одна строка");
        ReactDom.render(
            <div>
                <Button/>
                <MessagesList data={messagesData} />
            </div>,
            document.getElementById('root')
        )
    };
    return <button type="submit" onClick={handleClick}>Добавить строку</button>;
};

const messagesData = ['Строка', 'Еще одна строка', 'Снова строка', 'Последняя'];

const Message = (props) => <div className="test">{props.text}</div>;

const MessagesList = ({data}) => {
    //console.log(props);
    return data.map((item, index) => <Message text={item} key={index} />);
};

ReactDom.render(
    <div>
        <Button/>
        <MessagesList data={messagesData} />
    </div>,
    document.getElementById('root')
)