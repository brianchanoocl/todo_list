import { SmileOutlined } from '@ant-design/icons/lib/icons';
import { useSelector } from 'react-redux';

function DoneItems() {
    const todoItems = useSelector(state => state.todoItems);

    return (
        <div className="main-page center-text">
            <h1 className="center-item"><SmileOutlined /> Done List <SmileOutlined /></h1>
            <div className="center-item">
            {
                todoItems.filter(item => item.done).map((item, index) => {
                   return <p key={item+index}>{item.text}</p>
                })
            }
        </div>
        </div>
    );
}

export default DoneItems;