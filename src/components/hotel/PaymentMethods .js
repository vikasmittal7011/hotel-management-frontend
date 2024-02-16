import Radio from "../form/Radio";
import { paymentMathods } from "../../utils/constant";

const PaymentMethods = ({ handlePaymentInfo, text = "xl", mt = "8" }) => {
    return (
        <fieldset className={`mt-${mt}`}>
            <legend className={`block text-${text} font-medium leading-6 text-gray-900 pb-1`}>
                Payment Methods
            </legend>
            <div className="mt-2 space-y-2">
                {paymentMathods?.map((pay, i) => (
                    <Radio
                        key={i}
                        id="paymentMethod"
                        onChange={handlePaymentInfo}
                        title={pay.name}
                    >
                        {pay.name}
                    </Radio>
                ))}
            </div>
        </fieldset>
    );
};

export default PaymentMethods;
