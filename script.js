document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    // Add user message to chat
    addMessageToChat(userInput, 'user');
    document.getElementById('user-input').value = '';

    // Simulate bot response based on user input
    setTimeout(function() {
        const botResponse = getBotResponse(userInput);
        addMessageToChat(botResponse, 'bot');
    }, 1000); // Delay to simulate bot "thinking"
});

function addMessageToChat(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);

    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}

function getBotResponse(input) {
    input = input.toLowerCase();

    // Simple keyword matching
    if (input.includes('hello') || input.includes('hi')) {
        return 'Hello! How can I help you today?';
    } else if (input.includes('how are you')) {
        return 'I am just a bot, but I am doing great! Thanks for asking.';
    } else if (input.includes('what is your name')) {
        return 'I am a simple chatbot created to assist you. What is your name?';
    } else if (input.includes('my name is')) {
        const name = input.split('my name is ')[1];
        return `Nice to meet you, ${name}! How can I assist you today?`;
    } else if (input.includes('capital of france')) {
        return 'The capital of France is Paris.';
    } else if (input.includes('global economic crises')) {
        return `### The Global Economic Crises: An In-Depth Analysis\n\n` +
        `The world has experienced numerous economic crises throughout history, each marked by significant financial turmoil, widespread unemployment, and severe impacts on individual livelihoods and national economies. Understanding the complex causes and consequences of these crises is essential for grasping the contemporary economic landscape. One of the most notable crises was the Great Depression of the 1930s, which began in the United States with the stock market crash of 1929. This crisis was fueled by a combination of speculative investments, overproduction in agriculture and industry, and a lack of effective regulation in financial markets. As banks failed and unemployment soared, the global economy plummeted, leading to widespread poverty and social unrest. The Great Depression not only reshaped the economic policies of nations but also laid the groundwork for the emergence of social safety nets and increased government intervention in the economy.\n\n` +
        `Fast forward to the 2008 financial crisis, which was largely triggered by the collapse of the housing bubble in the United States. The crisis was characterized by the proliferation of subprime mortgage lending, where banks extended credit to individuals with poor credit histories, leading to a surge in home foreclosures. Financial institutions, heavily invested in these risky assets, found themselves on the brink of collapse, necessitating unprecedented government bailouts to stabilize the banking sector. The repercussions of the 2008 crisis were felt worldwide, resulting in a severe recession that lasted for years, with millions losing their homes and jobs. This crisis not only exposed the vulnerabilities of the global financial system but also sparked a debate about the role of regulation and the need for a more resilient economic framework to prevent future collapses.\n\n` +
        `Moreover, economic crises are often intertwined with broader social and political factors. The 1997 Asian financial crisis, for example, originated in Thailand with the collapse of the Thai baht. This crisis quickly spread to neighboring countries, exposing weaknesses in their financial systems and leading to currency devaluations and recessions across Asia. The crisis highlighted the dangers of excessive borrowing and the impact of speculative investments in emerging markets. In its aftermath, nations adopted reforms aimed at strengthening their financial systems and reducing vulnerabilities, yet the crisis also resulted in significant social upheaval, with widespread protests and changes in government in several affected countries.\n\n` +
        `The recurring theme across these crises is the interdependence of global economies. In our increasingly interconnected world, a financial crisis in one region can quickly cascade into a global phenomenon. The European sovereign debt crisis that began in 2009 serves as a stark example. Triggered by excessive government debt in several eurozone countries, including Greece, Ireland, and Portugal, this crisis led to fears of contagion across Europe. Austerity measures were implemented, resulting in deep cuts to public services and social programs, which in turn sparked widespread protests and political instability. The crisis challenged the integrity of the European Union and raised questions about the sustainability of the euro as a common currency.\n\n` +
        `In addition to these historical examples, the COVID-19 pandemic has introduced a new layer of complexity to the global economy. The sudden and widespread shutdown of economies around the world to curb the spread of the virus resulted in an unprecedented economic contraction. Businesses closed, supply chains were disrupted, and millions faced unemployment. Governments responded with massive stimulus packages to support individuals and businesses, leading to soaring levels of public debt. While these measures were necessary to mitigate the immediate impact of the pandemic, they have also raised concerns about long-term economic stability and inflation. As countries attempt to recover, the uneven distribution of vaccines and economic resources threatens to exacerbate global inequalities, potentially leading to further unrest and economic challenges.\n\n` +
        `Addressing the root causes of economic crises requires a multifaceted approach. It is essential to enhance regulatory frameworks to mitigate systemic risks in the financial sector, ensuring that institutions are held accountable and that consumer protections are in place. Additionally, promoting sustainable economic practices that prioritize long-term stability over short-term gains can help reduce vulnerabilities. This includes fostering inclusive economic growth, investing in education and workforce development, and addressing issues such as income inequality and access to healthcare. By taking proactive measures, nations can build more resilient economies capable of weathering future shocks.\n\n` +
        `Moreover, global cooperation is crucial in navigating the complexities of the modern economic landscape. International organizations such as the International Monetary Fund (IMF) and the World Bank play a vital role in providing support and guidance to countries facing economic challenges. Their efforts in promoting financial stability, fostering economic growth, and reducing poverty are essential in preventing crises and ensuring sustainable development. Collaborative efforts among nations, particularly in areas such as trade, environmental policy, and technology, can contribute to a more stable and prosperous global economy.\n\n` +
        `In conclusion, the history of economic crises underscores the importance of understanding their causes, consequences, and the need for comprehensive strategies to address them. From the Great Depression to the 2008 financial crisis and the ongoing challenges posed by the COVID-19 pandemic, the lessons learned from these events highlight the interconnectedness of global economies and the necessity for robust regulatory frameworks and international cooperation. As we move forward, it is imperative that nations prioritize sustainable economic practices and work collaboratively to build a more resilient and equitable global economy. Only through concerted efforts can we hope to mitigate the impacts of future crises and foster a more stable and prosperous world for all.`;
    } else if (input.includes('bye')) {
        return 'Goodbye! Have a great day!';
    } else {
        // Attempt to solve a math expression
        try {
            // Remove any non-math characters (optional: you might want to customize this)
            const sanitizedInput = input.replace(/[^0-9+\-*/(). ]/g, '');
            const result = eval(sanitizedInput);
            return `The result of ${sanitizedInput} is ${result}.`;
        } catch (error) {
            return "I'm sorry, I can't solve that math problem.";
        }
    }
}