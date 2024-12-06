// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Здесь вы можете добавить метатеги или ссылки на стили */}
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
