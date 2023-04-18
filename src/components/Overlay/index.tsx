import { ArrowCircleDown, ArrowCircleUp, XCircle } from "@phosphor-icons/react";
import { FormEvent, useEffect, useState } from "react";
import { GetDateF } from "../../constants/format";
import { ListType } from "../../pages/Transactions";
import { ContainerStyled, InputModal, FormStyled, Radio, RadioWrapper, ButtonStyled, CloseButton } from "./overlay.styled";

interface TypeOverlay {
  show: boolean
  setShow: (value:boolean) => void
  setList: (List:ListType) => void
}

export function Overlay({show, setShow, setList}:TypeOverlay) {

  const [positive, setPositive] = useState('1')
  const [newItem, setNewItem] = useState<ListType>({
    title: '',
    date: GetDateF(),
    tag: '',
    value: 0
  })
  useEffect(() => {
    if(show === true){
      document.body.style.height = '100vh'
      document.body.style.overflowY = 'hidden'
    } else{
      document.body.style.height = '100%'
      document.body.style.overflowY = 'scroll'
    }
  }, [show])

  function handleSetSubmit(e:FormEvent) {
    e.preventDefault()
    if(parseInt(positive) < 0){
      setList({
        ...newItem,
        value: newItem.value * -1
      })
    }else {
      setList(newItem)
    }
    console.log(newItem)
  }
  function setValue(key:any, value:any) {
    setNewItem(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <ContainerStyled show={show}>
      <FormStyled onSubmit={handleSetSubmit}>
        <CloseButton onClick={() => setShow(false)} type="button"><XCircle size={30} /></CloseButton>
        <h2>Nova Transação</h2>
        <InputModal 
          type='text'
          placeholder="Descrição"
          maxLength={25}
          required
          onChange={(e) => setValue('title', e.currentTarget.value)}
        />
        <InputModal 
          type='number' 
          placeholder="Preço"
          min={1}
          step={0.01}
          required
          onChange={(e) => setValue('value',parseFloat(e.currentTarget.value))}
        />
        <InputModal 
          placeholder="Categoria" 
          maxLength={15}
          required 
          onChange={(e) => setValue('tag', e.currentTarget.value)}
        />
        <RadioWrapper>
          <Radio>
            <ArrowCircleUp size={24} color={'#00B37E'} />
            <span>Entrada</span>
            <input 
              type='radio'
              name="select"
              value={1}
              required 
              onChange={(e) => setPositive(e.currentTarget.value)}
            />
          </Radio>
          <Radio className="radio">
            <ArrowCircleDown size={24} color={'#F75A68'} />
            <span>Saída</span>
            <input 
              type='radio'
              name="select"
              value={-1}
              required
              onChange={(e) => setPositive(e.currentTarget.value)}
            />
          </Radio>
        </RadioWrapper>
        <ButtonStyled type="submit">Cadastrar</ButtonStyled>
      </FormStyled>
    </ContainerStyled>
  )
}