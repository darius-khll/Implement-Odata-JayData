using Microsoft.OData.UriParser;

namespace OData.Implementions
{
    public class CaseInsensitiveResolver : ODataUriResolver
    {
        private bool _enableCaseInsensitive;

        public override bool EnableCaseInsensitive
        {
            get { return true; }
            set { _enableCaseInsensitive = value; }
        }
    }
}