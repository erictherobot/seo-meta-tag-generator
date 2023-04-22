import { useState } from "react";

interface MetaTagGeneratorProps {
  title: string;
  description: string;
  keywords: string;
  image: string;
}

const MetaTagGenerator: React.FC = () => {
  const [generatedTags, setGeneratedTags] = useState<MetaTagGeneratorProps>({
    title: "",
    description: "",
    keywords: "",
    image: "",
  });

  const [metaTagString, setMetaTagString] = useState("");

  const generateTags = () => {
    const title = generatedTags.title.trim();
    const description = generatedTags.description.trim();
    const keywords = generatedTags.keywords.trim();
    const image = generatedTags.image.trim();

    const metaTagString = `
      <title>${title}</title>
      <meta name="description" content="${description}" />
      <meta name="keywords" content="${keywords}" />
      <meta property="og:image" content="${image}" />
    `;

    setMetaTagString(metaTagString);
  };

  return (
    <div className="container mx-auto">
      <form onChange={generateTags} className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold">SEO Meta Tag Generator</h1>
        <div className="my-4">
          <label htmlFor="title" className="block font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={generatedTags.title}
            onChange={(event) =>
              setGeneratedTags({ ...generatedTags, title: event.target.value })
            }
            className="block w-full mt-1 rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-4"
          />
        </div>
        <div className="my-4">
          <label
            htmlFor="description"
            className="block font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            name="description"
            value={generatedTags.description}
            onChange={(event) =>
              setGeneratedTags({
                ...generatedTags,
                description: event.target.value,
              })
            }
            rows={3}
            className="block w-full mt-1 rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500  py-2 px-4"
          ></textarea>
        </div>
        <div className="my-4">
          <label htmlFor="keywords" className="block font-medium text-gray-700">
            Keywords (separated by commas)
          </label>
          <input
            type="text"
            name="keywords"
            value={generatedTags.keywords}
            onChange={(event) =>
              setGeneratedTags({
                ...generatedTags,
                keywords: event.target.value,
              })
            }
            className="block w-full mt-1 rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-4"
          />
        </div>
        <div className="my-4">
          <label htmlFor="image" className="block font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={generatedTags.image}
            onChange={(event) =>
              setGeneratedTags({ ...generatedTags, image: event.target.value })
            }
            className="block w-full mt-1 rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 py-2 px-4"
          />
        </div>
      </form>

      <div className="mt-10 max-w-lg mx-auto">
        <textarea
          className="block w-full mt-1 rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          rows={6}
          value={metaTagString}
          readOnly
        />
      </div>
    </div>
  );
};

export default MetaTagGenerator;
