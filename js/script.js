$(document).ready(function() {
    $('#data_nascimento').change(function() {
        if ($(this).val()) {
            const nascimento = new Date($(this).val());
            const hoje = new Date();
            let idade = hoje.getFullYear() - nascimento.getFullYear();
            const mes = hoje.getMonth() - nascimento.getMonth();
            if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
                idade--;
            }
            $('#idade').val(idade + ' anos');
        }
    });
    let expCount = 0;
    $('#addExperiencia').click(function() {
        expCount++;
        const html = `
            <div class="experiencia-item border p-3 mb-3">
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label>Empresa</label>
                            <input type="text" class="form-control" name="experiencias[${expCount}][empresa]" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label>Cargo</label>
                            <input type="text" class="form-control" name="experiencias[${expCount}][cargo]" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label>Data Início</label>
                            <input type="month" class="form-control" name="experiencias[${expCount}][inicio]" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label>Data Fim</label>
                            <input type="month" class="form-control" name="experiencias[${expCount}][fim]">
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label>Descrição</label>
                    <textarea class="form-control" name="experiencias[${expCount}][descricao]" rows="2"></textarea>
                </div>
                <button type="button" class="btn btn-danger btn-sm remover-experiencia">Remover</button>
            </div>
        `;
        $('#experiencias-container').append(html);
    });
    let formCount = 0;
    $('#addFormacao').click(function() {
        formCount++;
        const html = `
            <div class="formacao-item border p-3 mb-3">
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label>Instituição</label>
                            <input type="text" class="form-control" name="formacoes[${formCount}][instituicao]" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label>Curso</label>
                            <input type="text" class="form-control" name="formacoes[${formCount}][curso]" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label>Data Início</label>
                            <input type="month" class="form-control" name="formacoes[${formCount}][inicio]" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label>Data Conclusão</label>
                            <input type="month" class="form-control" name="formacoes[${formCount}][conclusao]">
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-danger btn-sm remover-formacao">Remover</button>
            </div>
        `;
        $('#formacoes-container').append(html);
    });
    $(document).on('click', '.remover-experiencia', function() {
        $(this).closest('.experiencia-item').remove();
    });

    $(document).on('click', '.remover-formacao', function() {
        $(this).closest('.formacao-item').remove();
    });
});