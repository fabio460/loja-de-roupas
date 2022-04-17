import React from 'react'
import FormLogin from '../FormLogin/FormLogin'
import './BotaoFinalizarPedido.css'
export default function BotaoFinalizarPedido() {
  return (
    <div className='BotaoFinalizarPedido'>
            <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
                finalizar pedido
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Logar</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <FormLogin />
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">fechar</button>
                    </div>
                    
                    
                    <div class="modal-footer">
                    
                    
                   
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}
