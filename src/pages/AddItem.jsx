import React from "react";

export default function AddItem() {

    const [formData, setFormData] = React.useState({
        wineName: '',
        winePrice: '',
        wineDescription: '',
        wineImage: null,
    })


    function handleChange(event) {
         const {name, value, type, files} = event.target

         if (type === 'file') {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [name] : files[0]
                }
            }) 
         } else {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [name] : value
                }
            })
         }
    }

    function handleSubmit(event) {
        event.preventDefault()

        const data = new FormData

        data.append('wineName', formData.wineName)
        data.append('wineDescription', formData.wineDescription)
        data.append('wineImage', formData.wineImage)
        data.append('winePrice', formData.winePrice)

        fetch('http://localhost:3000/wines', {
            method: 'POST',
            body: data
        })
            .then(res => res.json())
            .then(data => console.log(data))

        setFormData({
            wineName: '',
            winePrice: '',
            wineDescription: '',
            wineImage: null,
        })
    }

    return (
        <div className="form--page">
            <form action="" className="add--item--form" onSubmit={handleSubmit}>
                <label htmlFor="item--name">Wine name:</label>
                <input 
                      type="text" 
                      className="item--name" 
                      id="item--name" 
                      name="wineName"
                      onChange={handleChange}
                      value={formData.wineName}
                />
                <label htmlFor="item--price">Wine price:</label>
                <input 
                      type="text" 
                      className="item--name" 
                      id="item--name" 
                      name="winePrice"
                      onChange={handleChange}
                      value={formData.winePrice}
                />
                <label htmlFor="items--description" >Wine description:</label>
                <textarea 
                      type="text" 
                      className="items--description" 
                      id="items--description" 
                      name="wineDescription"
                      onChange={handleChange}
                      value={formData.wineDescription}
                />
                <label htmlFor="item--image" className="item--images">Image:</label>
                <input 
                      type="file" 
                      className="item--images" 
                      id="item--image" 
                      name="wineImage"
                      onChange={handleChange}
                />
                <button>Add Item</button>
            </form>
        </div>
    )
}