
export const handleGraphResponse = (graphData: any[], graphType: string): any => {
    const graph = graphData.find((g: any) => g.type === graphType);
    if (graph) {
      return { user: false, type: 'graph', data: graph };
    }
    return { user: false, type: 'text', text: `No ${graphType} graph found.` };
  };
  
  export const handleCodeResponse = (codeData: any[], codeLang: string): any => {
    const code = codeData.find((c: any) => c.language.toLowerCase() === codeLang);
    if (code) {
      return { user: false, type: 'code', data: code };
    }
    return { user: false, type: 'text', text: `No code found for ${codeLang}.` };
  };
  
  export const handleTableResponse = (tableData: any[], input: string): any => {
    const tableIndex = parseInt(input.match(/table\s+(\d+)/i)?.[1] ?? '1', 10) - 1;
    const table = tableData?.[tableIndex];
    if (table) {
      return { user: false, type: 'table', data: table };
    }
    return { user: false, type: 'text', text: `Table ${tableIndex + 1} not found.` };
  };
  
  const handleTextResponse = (textData: any[]) => {
    const jsonResponse = textData && textData[0];
    return { user: false, type: 'text', text: jsonResponse?.responses.text };
  };
  
  export const getBotResponse = (
    input: string,
    graphData: any[],
    codeData: any[],
    tableData: any[],
    textData: any[]
  ): any => {
    const graphMatch = input.match(/\b(bar|pie|line)\s*(graph)?\b/i);
    if (graphMatch) {
      return handleGraphResponse(graphData, graphMatch[1].toLowerCase());
    }
  
    const codeLangMatch = input.match(/\b(javascript|python|c\+\+|ruby|go|java|c#)\b/i);
    if (codeLangMatch) {
      return handleCodeResponse(codeData, codeLangMatch[0].toLowerCase());
    }
  
    if (input.match(/\btable\b/i)) {
      return handleTableResponse(tableData, input);
    }
  
    if (/\btext\b/i.test(input)) {
        return handleTextResponse(textData);
      }
  
    return { user: false, type: 'text', text: `Sorry, I didn't understand that. How can I assist you today?` };
  };
  