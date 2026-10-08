using GestaoEncomendas.Configurations;

var builder = WebApplication.CreateBuilder(args);

builder.ApplyConfigurationsBeforeBuild();

var app = builder.Build();

app.ApplyConfigurationsAfterBuild();
app.Run();
