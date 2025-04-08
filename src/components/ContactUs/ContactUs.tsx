import { ChangeEvent, FormEvent, useState } from 'react';
import { Title } from '../../ui/Title';
import style from './ContactUs.module.scss';
import img from '../../assets/contact.svg'

type TFormData = {
  name: string;
  phone: string;
  message: string;
};

const initialState = { name: '', phone: '', message: '' };

export function ContactUs() {
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
  }

  return (
    <section className={style.contact_us}>
      <div className={style.contact_us_wrapper}>
        <Title
          title='Contact Us'
          description='Connect with Us: Let`s Discuss Your Digital Marketing Needs'
          className={style.contact_us_title}
        />
        <div className={style.contact_content}>
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
          <img src={img} alt='' />
        </div>
      </div>
    </section>
  );
}
