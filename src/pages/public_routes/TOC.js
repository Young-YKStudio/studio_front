import { LastUpdated, Introduction, Definitions, UseOfTheServices, Fees, TermAndTermination, Confidentiality, ThirdPartyServices, DataPrivacy, AdditionalTerms, Warranties, LimitationOfLiability, Indemnification, General } from '../../Data/TermsOfService';

const TOC = (props) => {
  return (
    <div className="relative overflow-hidden bg-white py-16">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="block text-center text-lg font-semibold text-gray-900">YK Studio</span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Terms of Service
            </span>
            <span className="block text-center text-sm font-semibold text-gray-400 pt-4">Last Updated: {LastUpdated[0].date}</span>
          </h1>

          {/* Introduction */}
          <div>
            {Introduction.map((texts) => (
              <p key={texts.paragraph} className='mt-6 text-md leading-6 text-gray-800'>{texts.text}</p>
            ))}
          </div>

          {/* DEFINITIONS */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">1. DEFINITIONS.</h6>
            <ul className='pl-4 pt-2'>
              {Definitions.map((texts) => (
                <li key={texts.number} className='pt-1 pb-2 text-base leading-6 text-gray-800'>{texts.number}. {texts.text}</li>
              ))}
            </ul>
          </div>

          {/* USE OF THE SERVICES. */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">2. USE OF THE SERVICES.</h6>
            <ul className='pl-4 pt-2'>
              {UseOfTheServices.map((texts) => (
                <li key={texts.number} className='pt-1 pb-2 text-base leading-6 text-gray-800'>{texts.number}. {texts.text}</li>
              ))}
            </ul>
          </div>

          {/* 3. FEES; PAYMENT; TAXES. */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">3. FEES; PAYMENT; TAXES.</h6>
            <ul className='pl-4 pt-2'>
              {Fees.map((texts) => (
                <li key={texts.number} className='pt-1 pb-2 text-base leading-6 text-gray-800'>{texts.number}. {texts.text}</li>
              ))}
            </ul>
          </div>

          {/* 4. TERM AND TERMINATION. */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">4. TERM AND TERMINATION.</h6>
            <ul className='pl-4 pt-2'>
              {TermAndTermination.map((texts) => (
                <li key={texts.number} className='pt-1 pb-2 text-base leading-6 text-gray-800'>{texts.number}. {texts.text}</li>
              ))}
            </ul>
          </div>

          {/* 5. CONFIDENTIALITY. */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">5. CONFIDENTIALITY.</h6>
            <ul className='pl-4 pt-2'>
              {Confidentiality.map((texts) => (
                <li key={texts.number} className='pt-1 pb-2 text-base leading-6 text-gray-800'>{texts.number}. {texts.text}</li>
              ))}
            </ul>
          </div>

          {/* 6. THIRD PARTY SERVICES. */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">6. THIRD PARTY SERVICES.</h6>
            <ul className='pl-4 pt-2'>
              {ThirdPartyServices.map((texts) => (
                <li key={texts.number} className='pt-1 pb-2 text-base leading-6 text-gray-800'>{texts.text}</li>
              ))}
            </ul>
          </div>

          {/* 7. DATA PRIVACY; STATISTICAL DATA; DATA EXTRACTS. */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">7. DATA PRIVACY; STATISTICAL DATA; DATA EXTRACTS.</h6>
            <ul className='pl-4 pt-2'>
              {DataPrivacy.map((texts) => (
                <li key={texts.number} className='pt-1 pb-2 text-base leading-6 text-gray-800'>{texts.number}. {texts.text}</li>
              ))}
            </ul>
          </div>

          {/* 8. ADDITIONAL TERMS. */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">8. ADDITIONAL TERMS.</h6>
            <ul className='pl-4 pt-2'>
              {AdditionalTerms.map((texts) => (
                <li key={texts.number} className='pt-1 pb-2 text-base leading-6 text-gray-800'>{texts.number}. {texts.text}</li>
              ))}
            </ul>
          </div>

          {/* 9. WARRANTIES AND DISCLAIMER. */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">9. WARRANTIES AND DISCLAIMER.</h6>
            <ul className='pl-4 pt-2'>
              {Warranties.map((texts) => (
                <li key={texts.number} className='pt-1 pb-2 text-base leading-6 text-gray-800'>{texts.number}. {texts.text}</li>
              ))}
            </ul>
          </div>

          {/* 10. LIMITATION OF LIABILITY. */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">10. LIMITATION OF LIABILITY.</h6>
            <ul className='pl-4 pt-2'>
              {LimitationOfLiability.map((texts) => (
                <li key={texts.number} className='pt-1 pb-2 text-base leading-6 text-gray-800'>{texts.number}. {texts.text}</li>
              ))}
            </ul>
          </div>

          {/* 11. INDEMNIFICATION. */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">11. INDEMNIFICATION.</h6>
            <ul className='pl-4 pt-2'>
              {Indemnification.map((texts) => (
                <li key={texts.number} className='pt-1 pb-2 text-base leading-6 text-gray-800'>{texts.number}. {texts.text}</li>
              ))}
            </ul>
          </div>

          {/* 12. GENERAL. */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">12. GENERAL.</h6>
            <ul className='pl-4 pt-2'>
              {General.map((texts) => (
                <li key={texts.number} className='pt-1 pb-2 text-base leading-6 text-gray-800'>{texts.number}. {texts.text}</li>
              ))}
            </ul>
          </div>



        </div>
      </div>
    </div>
  );
}
export default TOC;