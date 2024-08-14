type SourceLinksProps = {
    sourceUrls: string[];
  };
  
  const SourceLinks = ({ sourceUrls }: SourceLinksProps) => {
    console.log(sourceUrls)
    return (
      <> 
        <hr />
        <p className="mt-6 mb-16 text-white dark:text-black flex flex-col">
          {sourceUrls.map((url, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="hover:underline  text-gray-400">
              Source <span className="text-white dark:text-black">{url}</span> 
            </a>
          ))}
        </p>
      </>
    );
  };
  
  export default SourceLinks;
  