import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import List from './List';
import ListItem from './ListItem';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto p-10">
        <div className="flex flex-col-reverse justify-center sm:flex-row sm:flex-wrap sm:justify-between gap-4">
          <List wrapperClasses="hidden sm:block" title="Encontre seu veículo">
            <ListItem href="#">Encontre seu veículo</ListItem>
            <ListItem href="#">Lojas</ListItem>
            <ListItem href="#">Promoções</ListItem>
            <ListItem href="#">Vantagens</ListItem>
            <ListItem href="#">Garantia Mais</ListItem>
          </List>

          <List wrapperClasses="hidden sm:block" title="A Empresa">
            <ListItem href="#">Sobre</ListItem>
            <ListItem href="#">Delivery</ListItem>
            <ListItem href="#">Aviso de Privacidade</ListItem>
            <ListItem href="#">Blog Seminovos</ListItem>
          </List>

          <List wrapperClasses="hidden sm:block" title="Atendimento">
            <ListItem href="#">Perguntas Frequentes</ListItem>
            <ListItem href="#">Fale Conosco</ListItem>
            <ListItem href="#">Pós-vendas</ListItem>
          </List>

          <List wrapperClasses="hidden sm:block" title="Lojistas">
            <ListItem href="#">Acesse Seminovos Atacado</ListItem>
          </List>

          <List wrapperClasses="mx-auto text-center sm:text-left sm:mx-0" title="Atendimento ao cliente" inline>
            <ListItem href="#">
              <span className="bg-primary p-3 inline-flex justify-center items-center rounded-lg">0800 000 000</span>
            </ListItem>
            <ListItem href="#">
              <span className="bg-whatsapp p-3 inline-flex justify-center items-center rounded-lg h-full aspect-square">
                <Image className="m-0" src="/whatsapp.svg" alt="Whatsapp Icone" height={20} width={20} />
              </span>
            </ListItem>
          </List>

          <List wrapperClasses="mx-auto text-center sm:text-left sm:mx-0" title="Siga a gente" inline>
            <ListItem href="#">
              <span className="bg-primary p-2.5 inline-flex justify-center items-center rounded-lg">
                <Facebook size={16} />
              </span>
            </ListItem>
            <ListItem href="#">
              <span className="bg-primary p-2.5 inline-flex justify-center items-center rounded-lg">
                <Instagram size={16} />
              </span>
            </ListItem>
            <ListItem href="#">
              <span className="bg-primary p-2.5 inline-flex justify-center items-center rounded-lg">
                <Twitter size={16} />
              </span>
            </ListItem>
            <ListItem href="#">
              <span className="bg-primary p-2.5 inline-flex justify-center items-center rounded-lg">
                <Linkedin size={16} />
              </span>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}
