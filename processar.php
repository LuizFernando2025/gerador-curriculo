<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $dados = [
        'pessoal' => [
            'nome' => $_POST['nome'] ?? '',
            'email' => $_POST['email'] ?? '',
            'telefone' => $_POST['telefone'] ?? '',
            'data_nascimento' => $_POST['data_nascimento'] ?? '',
            'idade' => $_POST['idade'] ?? ''
        ],
        'experiencias' => $_POST['experiencias'] ?? [],
        'formacoes' => $_POST['formacoes'] ?? []
    ];
    ?>
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Currículo - <?= htmlspecialchars($dados['pessoal']['nome']) ?></title>
        <style>
            body { font-family: Arial; margin: 40px; }
            .header { border-bottom: 2px solid #333; padding-bottom: 20px; }
            .nome { font-size: 28px; font-weight: bold; }
            .section { margin: 30px 0; }
            .section-title { font-size: 20px; border-bottom: 1px solid #ccc; padding-bottom: 5px; }
            @media print { .no-print { display: none; } }
        </style>
    </head>
    <body>
        <div class="header">
            <div class="nome"><?= htmlspecialchars($dados['pessoal']['nome']) ?></div>
            <div>Email: <?= htmlspecialchars($dados['pessoal']['email']) ?></div>
            <div>Telefone: <?= htmlspecialchars($dados['pessoal']['telefone']) ?></div>
            <div>Idade: <?= htmlspecialchars($dados['pessoal']['idade']) ?></div>
        </div>

        <?php if (!empty($dados['experiencias'])): ?>
        <div class="section">
            <div class="section-title">Experiência Profissional</div>
            <?php foreach ($dados['experiencias'] as $exp): ?>
                <div style="margin-bottom: 15px;">
                    <strong><?= htmlspecialchars($exp['empresa']) ?></strong> - <?= htmlspecialchars($exp['cargo']) ?><br>
                    <?= htmlspecialchars($exp['inicio']) ?> até <?= htmlspecialchars($exp['fim'] ?: 'Atual') ?>
                    <?php if (!empty($exp['descricao'])): ?>
                        <p><?= nl2br(htmlspecialchars($exp['descricao'])) ?></p>
                    <?php endif; ?>
                </div>
            <?php endforeach; ?>
        </div>
        <?php endif; ?>

        <?php if (!empty($dados['formacoes'])): ?>
        <div class="section">
            <div class="section-title">Formação Acadêmica</div>
            <?php foreach ($dados['formacoes'] as $form): ?>
                <div style="margin-bottom: 15px;">
                    <strong><?= htmlspecialchars($form['instituicao']) ?></strong><br>
                    <?= htmlspecialchars($form['curso']) ?> - 
                    <?= htmlspecialchars($form['inicio']) ?> até <?= htmlspecialchars($form['conclusao'] ?: 'Cursando') ?>
                </div>
            <?php endforeach; ?>
        </div>
        <?php endif; ?>

        <div class="no-print">
            <button onclick="window.print()">Imprimir/PDF</button>
            <button onclick="history.back()">Voltar</button>
        </div>
    </body>
    </html>
    <?php
} else {
    header('Location: index.php');
    exit;
}
?>