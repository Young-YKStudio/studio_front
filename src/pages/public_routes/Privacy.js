import { Introduction, InformationWeCollect, SourcesWeCollect, HowWeUseInformation, InformationWeShare, UpdateYourInformation, Analytics, Cookies, CaliforniaPrivacy, InternationalDataTransfers, LinksToOtherSites, Security, Children, ContactUs, LastUpdated } from "../../Data/PrivacyPlicy";

const PrivacyPolicy = (props) => {
  return (
    <div className="relative overflow-hidden bg-white py-16">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="block text-center text-lg font-semibold text-gray-900">YK Studio</span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Privacy Policy
            </span>
            <span className="block text-center text-sm font-semibold text-gray-400 pt-4">Last Updated: {LastUpdated[0].date}</span>
          </h1>

          {/* Introduction */}
          <div>
            {Introduction.map((texts) => (
              <p key={texts.paragraph} className='mt-6 text-md leading-6 text-gray-800'>{texts.text}</p>
            ))}
          </div>

          {/* Information We Collect */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">Information We Collect</h6>
            {InformationWeCollect.map((texts) => (
              <div key={texts.paragraph}>
                <p className='pt-6 pb-2 text-md leading-6 text-gray-800'>{texts.text}</p>
                <ul>
                  {texts.lists.map((list) => (
                    <li key={list.listNum} className="pl-4 pt-2 text-md leading-6 text-gray-800">• {list.text}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sources We Collect */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">Sources of Information We collect</h6>
            {SourcesWeCollect.map((texts) => (
              <p key={texts.paragraph} className='mt-6 text-md leading-6 text-gray-800'>{texts.text}</p>
            ))}
          </div>

          {/* How We Use Info */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">How We Use the Information We Collect</h6>
            <p className='mt-6 text-md leading-6 text-gray-800'>We may use the information we obtain about you to:</p>
              {HowWeUseInformation.map((texts) => (
                <ul key={texts.list}>
                  <li className='pl-4 pt-2 text-md leading-6 text-gray-800'>• {texts.text}</li>
                  {texts.list2 ? <ul><li className="pl-12 pt-2 text-md leading-6 text-gray-800">•• {texts.list2}</li></ul> : null }
                </ul>
              ))}
          </div>

          {/* Information we Share */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">Information We Share</h6>
            {InformationWeShare.map((texts) => (
              <p key={texts.paragraph} className='mt-6 text-md leading-6 text-gray-800'>{texts.text}</p>
            ))}
          </div>

          {/* update information */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">Updating or Deleting Your Information</h6>
            {UpdateYourInformation.map((texts) => (
              <p key={texts.paragraph} className='mt-6 text-md leading-6 text-gray-800'>{texts.text}</p>
            ))}
          </div>

          {/* analytics */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">Analytics</h6>
            {Analytics.map((texts) => (
              <p key={texts.paragraph} className='mt-6 text-md leading-6 text-gray-800'>{texts.text}</p>
            ))}
          </div>

          {/* Cookies */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">Cookies, Tracking Choices and Third-Party Advertisers</h6>
            {Cookies.map((texts) => (
              <p key={texts.paragraph} className='mt-6 text-md leading-6 text-gray-800'>{texts.text}</p>
            ))}
          </div>

          {/* California */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">California Privacy Rights and Disclosures</h6>
            {CaliforniaPrivacy.map((texts) => (
              <ul key={texts.paragraph}>
                {texts.lists ? texts.lists.map((list) => (<li key={list.key} className="pl-4 pt-2 text-md leading-6 text-gray-800">• {list.text}</li>)) : <p className='mt-6 text-md leading-6 text-gray-800'>{texts.text}</p> }
              </ul>
            ))}
          </div>

          {/* International Data Transfers */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">International Data Transfers</h6>
            {InternationalDataTransfers.map((texts) => (
              <p key={texts.paragraph} className='mt-6 text-md leading-6 text-gray-800'>{texts.text}</p>
            ))}
          </div>

          {/* Links to Other Sites. */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">Links to Other Sites.</h6>
            {LinksToOtherSites.map((texts) => (
              <p key={texts.paragraph} className='mt-6 text-md leading-6 text-gray-800'>{texts.text}</p>
            ))}
          </div>

          {/* Security */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">Security</h6>
            {Security.map((texts) => (
              <p key={texts.paragraph} className='mt-6 text-md leading-6 text-gray-800'>{texts.text}</p>
            ))}
          </div>

          {/* Children's Privacy */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">Children's Privacy</h6>
            {Children.map((texts) => (
              <p key={texts.paragraph} className='mt-6 text-md leading-6 text-gray-800'>{texts.text}</p>
            ))}
          </div>

          {/* Contacting Us */}
          <div className="pt-8">
            <h6 className="text-lg font-bold">Contacting Us</h6>
            {ContactUs.map((texts) => (
              <p key={texts.paragraph} className='mt-6 text-md leading-6 text-gray-800'>{texts.text}</p>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
export default PrivacyPolicy;