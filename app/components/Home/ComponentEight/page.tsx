import React from 'react'

const ComponentEight = () => {
  return (
    <div
    className="relative bg-cover mb-10 mt-10 bg-center h-[300px] flex flex-col items-center justify-center text-center"
    style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/fc5b/0171/c1d0c8969022c818d8d4ef9026d858fa?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c0gYO6CGzDRSXK85d9rkUP7805DAzvLoz21644Q8AgGhG-l839YD3fXnE7u3QiZM6DSERJ2ME3mq4qWpMZsYNUZkJt~Djjwm6irZlEzgGCTAESzjINZY2yo1J7fFqJ-HR718stjDSaFmLTH6F0eXCJKE6mvkzOyC31pB6hV-2-lEqfjdu~ZlPqdv9nukbkmVzU4Wsh45JHwXRWQK10caEFbxCQ9RNrEt2EQ0nZYDLhxXli9hF3dj3z3mNUNqZMZwwyyZvCGmOk11e62BBsek6Y-Lilgow4ypqOmq7AY7apTxGVd5ytDxw-bYyOFKtPEE~LOCiJ54BlwKBR-tffkX7Q__')`, // Replace with your background image URL
    }}
>
    {/* Text Box */}
    <div className="bg-white bg-opacity-80 p-4 rounded-md border-2 ">
        <h2 className="text-lg md:text-2xl font-bold text-blue-900">
            Get Latest Update By Subscribing to Our Newsletter
        </h2>
    </div>

    {/* Button */}
    <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-pink-600">
        Shop Now
    </button>
</div>
)
}

export default ComponentEight