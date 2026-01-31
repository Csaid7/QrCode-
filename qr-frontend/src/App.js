import { useState } from 'react';
import './App.css';
import { TestimonialsSection } from './components/ui/testimonials-with-marquee';

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "This QR code generator has transformed how we share links. The speed and simplicity are unprecedented."
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The best QR code generator I've used. Clean interface and instant results. Perfect for my business cards."
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, a QR code tool that actually works flawlessly! I use it daily for my marketing campaigns."
  },
  {
    author: {
      name: "James Wilson",
      handle: "@jameswdev",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Simple, fast, and reliable. This is exactly what a QR code generator should be."
  },
  {
    author: {
      name: "Maya Chen",
      handle: "@mayatech",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "I've recommended this to all my colleagues. The download feature works perfectly every time."
  }
];

function App() {
  const [url, setUrl] = useState('');
  const [qrImage, setQrImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateQR = async () => {
    if (!url.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/Qr-Code-Generator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url })
      });

      const blob = await response.blob();
      const imageURL = URL.createObjectURL(blob);
      setQrImage(imageURL);
    } catch (error) {
      console.error('Error generating QR code:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      generateQR();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with QR Generator */}
      <section className="py-12 sm:py-24 md:py-32 px-4">
        <div className="mx-auto max-w-container">
          <div className="flex flex-col items-center text-center gap-8 sm:gap-12">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                QR Code Generator
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-[600px] font-medium">
                Create beautiful QR codes instantly. Just paste your URL and download your code in seconds.
              </p>
            </div>

            {/* QR Generator Card */}
            <div className="w-full max-w-2xl">
              <div className="rounded-lg border border-border bg-gradient-to-b from-muted/50 to-muted/10 p-6 sm:p-8">
                <div className="space-y-6">
                  {/* Input Section */}
                  <div className="space-y-3">
                    <label htmlFor="url-input" className="text-sm font-semibold block text-left">
                      Enter your URL
                    </label>
                    <input
                      id="url-input"
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="https://example.com"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                    />
                  </div>

                  {/* Generate Button */}
                  <button
                    onClick={generateQR}
                    disabled={!url.trim() || isLoading}
                    className="w-full px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Generating...' : 'Generate QR Code'}
                  </button>

                  {/* QR Code Display */}
                  {qrImage && (
                    <div className="space-y-4 pt-4 animate-in fade-in duration-500">
                      <div className="flex justify-center">
                        <div className="p-4 bg-white rounded-lg shadow-xl">
                          <img
                            src={qrImage}
                            alt="Generated QR Code"
                            className="w-64 h-64 object-contain"
                          />
                        </div>
                      </div>

                      {/* Download Button */}
                      <a href={qrImage} download="qr-code.png" className="block">
                        <button className="w-full px-6 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors">
                          Download QR Code
                        </button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl pt-8">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold">Instant Generation</h3>
                <p className="text-sm text-muted-foreground">Create QR codes in milliseconds</p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-2xl">📥</span>
                </div>
                <h3 className="font-semibold">Easy Download</h3>
                <p className="text-sm text-muted-foreground">Download high-quality PNG files</p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold">Clean Design</h3>
                <p className="text-sm text-muted-foreground">Beautiful, scannable QR codes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section
      <TestimonialsSection
        title="Trusted by creators worldwide"
        description="Join thousands of people who are already creating QR codes with our platform"
        testimonials={testimonials}
      /> */}

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="mx-auto max-w-container text-center text-sm text-muted-foreground">
          <p>Made with ❤️ by KOVO PIANO</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
