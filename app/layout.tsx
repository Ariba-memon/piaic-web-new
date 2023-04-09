
import './globals.css'
import ChakraWrapper from "../components/Chakra";
import Navbar from '../components/Navbar'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body><ChakraWrapper>{children}</ChakraWrapper>
      
      </body>
    </html>
  )
}
