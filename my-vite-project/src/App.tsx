import { useEffect } from 'react'
import './App.css'

// Extender la interfaz Window para incluir crmPlugin
declare global {
  interface Window {
    crmPlugin: {
      id: string;
      hash: string;
      locale: string;
      params?: any[];
      setMeta: (p: any) => void;
    };
  }
}

function App() {
  useEffect(() => {
    (function(a, m, o, c, r, p) {
      a[p] = {
        id: "1024363",
        hash: "5e516af538affc7a167d10dc6d438a2ccaab4c174859bfb8e5b2ec9c07b7dcef",
        locale: "es",
        setMeta: function(p) {
          this.params = (this.params || []).concat([p]);
        }
      };
      a[o] = a[o] || function() {
        (a[o].q = a[o].q || []).push(arguments);
      };
      var d = a.document, s = d.createElement('script');
      s.async = true;
      s.id = p + '_script';
      s.src = 'https://gso.kommo.com/js/button.js';
      d.head && d.head.appendChild(s);
    })(window, 0, 'crmPlugin', 0, 0, 'crm_plugin');

    return () => {
      const script = document.getElementById('crm_plugin_script');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <h1>Tester Chatbot IA</h1>
      <div id="chat-button-container"></div>
    </>
  )
}

export default App