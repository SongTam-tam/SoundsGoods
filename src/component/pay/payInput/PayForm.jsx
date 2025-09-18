import './style.scss'

const PayForm = () => {
    return (
        <form className='pay_delivery_form'>
            <div className="name_text_box">
                <strong>받으시는분</strong>
                <div className='con inp'>
                    <input type="text" name="" id="" />
                    <input type="text" name="" id="" />
                    <input type="checkbox" name="" id="chk_name" />
                    <label htmlFor="chk_name" className='chh'></label>
                </div>
            </div>
        </form>
    );
};

export default PayForm;