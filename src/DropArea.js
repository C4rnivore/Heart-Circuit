import {useState} from "react";

function startPy(){

}

function DropArea() {
    const [drag, setDrag] = useState(false)

    function dragStartHandler(e){
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e){
        e.preventDefault()
        setDrag(false)
    }

    function onDropHandler(e){
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        console.log(files)
        const formData = new FormData()
        formData.append('file', files[0]) //загрузка данных
        //axios.post('url',formData)  post - запрос
        setDrag(false)
    }

    return (
        <div id="drop-area" className="drop">
            <div className='dropZone'>
                {drag
                    ? <div className='drag-area'
                           onDragStart={e => dragStartHandler(e)}
                           onDragLeave={e => dragLeaveHandler(e)}
                           onDragOver={e => dragStartHandler(e)}
                           onDrop={e => onDropHandler(e)}
                    >Отпустите файлы</div>
                    :
                    <div className = 'drop-to-area'
                         onDragStart={e => dragStartHandler(e)}
                         onDragLeave={e => dragLeaveHandler(e)}
                         onDragOver={e => dragStartHandler(e)}
                    ><p>
                        Перенесите файлы сюда <br/>
                        <span>
                            и мы обработаем их для вас
                        </span>
                    </p>
                    </div>
                }
            </div>

            <p> или </p>

            <div className="browse-button">
                <input  type="file" id="file" multiple accept={"image/*"}/>
                <label  htmlFor="file"> Выберете файлы для загрузки </label>
            </div>

        </div>
    );
}

export default DropArea;