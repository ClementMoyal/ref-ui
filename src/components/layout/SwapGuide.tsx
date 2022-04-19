import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  NearIconDirectly,
  SwitchIcon,
  LiquidityIcon,
  SureIcon,
} from '~components/icon/Common';
import { isMobile } from '~utils/device';
import Modal from 'react-modal';

export default function SwapGuide() {
  const [closeStatus, setCloseStatus] = useState(true);

  useEffect(() => {
    const directlyGuidance = localStorage.getItem('directly-guidance');
    if (directlyGuidance == '1') {
      setCloseStatus(true);
    } else {
      setCloseStatus(false);
    }
  }, []);
  const closePop = (e: any) => {
    localStorage.setItem('directly-guidance', '1');
    e.stopPropagation();
    setCloseStatus(true);
  };
  const mobile = isMobile();
  return (
    <Modal
      isOpen={!closeStatus}
      // onRequestClose={closePop}
      style={{
        overlay: {
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
        },
        content: {
          outline: 'none',
          transform: `${
            mobile ? 'translate(-50%, -50%)' : 'translate(-50%, -70%)'
          }`,
        },
      }}
    >
      <div
        className={`flex flex-col justify-center`}
        style={{ width: mobile ? '90vw' : '' }}
      >
        <div
          className="flex justify-center"
          style={{ zoom: mobile ? '0.8' : '1' }}
        >
          {/* <NearIconDirectly></NearIconDirectly> */}
          <span>
            <img
              style={{ width: '110px' }}
              src="data:image/png;base64,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"
            ></img>
          </span>
        </div>
        <p className="flex justify-center text-xl text-white font-bold text-center mt-10 mb-6 xs:text-base md:text-base">
          <FormattedMessage id="do_not_need_to_deposit_in_ref"></FormattedMessage>
        </p>
        <p className="text-white text-base text-center xs:text-sm md:text-sm">
          <FormattedMessage id="you_can_add_liquidity_directly"></FormattedMessage>
        </p>
        {/* <p className="text-white text-base text-center mt-1 xs:text-sm md:text-sm">
          <FormattedMessage id="do_not_need_deposit_anymore"></FormattedMessage>
        </p> */}
        <div className="flex items-center text-xl text-white font-bold mt-10 xs:text-base md:text-base">
          <span
            className="flex-shrink-0"
            style={{ zoom: mobile ? '0.8' : '1' }}
          >
            {/* <SwitchIcon></SwitchIcon> */}
            <span>
              <img
                style={{ width: '59px' }}
                src="data:image/png;base64,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"
              ></img>
            </span>
          </span>
          <span className="mx-7">
            <FormattedMessage id="lightning_swaps"></FormattedMessage>
          </span>
          <span
            className="flex-shrink-0"
            style={{ zoom: mobile ? '0.8' : '1' }}
          >
            <SureIcon></SureIcon>
          </span>
        </div>
        <div className="flex items-center text-xl text-white font-bold mt-10 xs:text-base md:text-base">
          <span
            className="flex-shrink-0"
            style={{ zoom: mobile ? '0.8' : '1' }}
          >
            {/* <LiquidityIcon></LiquidityIcon> */}
            <span>
              <img
                style={{ width: '59px' }}
                src="data:image/png;base64,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"
              ></img>
            </span>
          </span>
          <span className="mx-7">
            <FormattedMessage id="frictionless_add_remove_liquidity"></FormattedMessage>
          </span>
          <span
            className="flex-shrink-0"
            style={{ zoom: mobile ? '0.8' : '1' }}
          >
            <SureIcon></SureIcon>
          </span>
        </div>
        <div className="flex justify-center items-center mt-4 xs:mt-8 md:mt-8">
          <span
            onClick={closePop}
            className="flex justify-center items-center bg-greenColor rounded-3xl text-sm text-black cursor-pointer px-8 py-1.5"
          >
            <FormattedMessage id="got_it"></FormattedMessage> !
          </span>
        </div>
      </div>
    </Modal>
  );
}
