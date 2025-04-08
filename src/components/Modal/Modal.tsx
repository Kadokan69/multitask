import { ChangeEvent, Dispatch, FormEvent, useState } from "react";
import style from './Modal.module.scss';

type TFormData = {
    name: string;
    phone: string;
    message: string;
  };
  
  const initialState = { name: '', phone: '', message: '' };

interface IModal{
    isOpen: boolean;
    setIsOpen: Dispatch<boolean>
}

export function Modal({isOpen, setIsOpen}:IModal) {

const [formData, setFormData] = useState<TFormData>(initialState);

  function handlerForem(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handlerSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(formData);
    setFormData(initialState);
    setIsOpen(false)
  }


  return (
    isOpen &&
    <div className={style.popup} onClick={()=>setIsOpen(false)}>
      <div className={style.popup_wrapper} onClick={(e)=> e.stopPropagation()}>
        <button onClick={()=>setIsOpen(false)} className={style.close_btn}></button>
      <form className={style.contact_form} onSubmit={handlerSubmit}>
            <label>
              <span>Name *</span>
              <input
                type='text'
                name='name'
                required
                placeholder='Name'
                value={formData.name}
                onChange={handlerForem}
              />
            </label>
            <label>
              <span>Phone *</span>

              <input
                type='tel'
                name='phone'
                required
                placeholder='+7 (999) 999 - 99 - 99'
                value={formData.phone}
                onChange={handlerForem}
              />
            </label>
            <label>
              <span>Message</span>
              <textarea
                name='message'
                placeholder='Message'
                rows={10}
                value={formData.message}
                onChange={handlerForem}
              ></textarea>
            </label>
            <button type='submit'>Submit</button>
          </form>
    
      </div>
    </div>
  );
}
